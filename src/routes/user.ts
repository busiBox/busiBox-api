import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.post('/', UserController.create)
routes.get('/', UserController.index)
routes.get('/:_id', UserController.getOne)
routes.put('/:_id', UserController.update)
routes.post('/:_id', UserController.inactivate)

module.exports = routes