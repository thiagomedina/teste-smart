import { Router } from 'express'

import ProductController from './app/controllers/ProductController'

const routes = new Router()

routes.get('/product', ProductController.index)
routes.post('/product', ProductController.create)

routes.put('/product/:id', ProductController.update)





export default routes
