import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', (_, res) => { return res.json({ message: "Hello, busiBoxer :)" }) })

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

export default routes