import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

const routes = new Router()

routes.get('/product', ProductController.index)
routes.post('/elastic', ProductController.transferElastic)

routes.post('/product', ProductController.create)

routes.put('/product/:id', ProductController.update)
routes.delete('/product/:id', ProductController.destroy)




export default routes
