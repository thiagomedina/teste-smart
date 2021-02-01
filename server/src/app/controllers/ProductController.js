import Product from '../models/Product'
import { getClient } from '../services/clientElasticSearch'


class ProductController {
  async index(req, res) {
    const result = await Product.find({})

    return res.json(result)
  }

  async transferElastic(req, res) {
    const result = await Product.find({})

    for await (let i of result) {

      getClient().index({
        index: 'teste',
        type: 'type_teste',
        body: i
      }, (error) => {
        if (error) {
          return res.status(400).json('error')
        }
      })
    }


    return res.json(result)

  }


  async create(req, res) {
    try {

      const { name, description, value, deadline } = req.body;
      const valueReplaced = value.replace(',', '.')
      const valueFormatted = parseFloat(valueReplaced)
      await Product.create({ name, description, value: valueFormatted, deadline })
      return res.status(201).json('product register successfuly')
    } catch (err) {
      console.log(err)
      return res
        .status(401)
        .json({ error: 'not was possible create a new product' })
    }
  }


  async update(req, res) {
    try {
      const { id } = req.params

      const ProductName = await Product.findById({ _id: id })

      if (!ProductName) {
        return res.status(401).json('product not found')
      }

      const { name, description, value, deadline } = req.body

      await Product.updateOne({ _id: id }, { name, description, value, deadline })
      console.log(req.body)

      return res.status(200).json('updated successfully')
    } catch (err) {
      console.log(err)
      return res.status(401).json('not was possible update the project')
    }
  }


  async destroy(req, res) {
    const { id } = req.params
    try {
      await Product.findByIdAndDelete({ _id: id })
      return res.status(200).json('deleted successfully')

    } catch (err) {
      return res.status(401).json('not was possible delete the project')
    }
  }


}

export default new ProductController()
