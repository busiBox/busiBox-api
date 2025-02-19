import { Router } from 'express'
import AuthController from '../controllers/AuthController'
import { checkJwt } from '../middlewares/checkJwt'

const routes = Router()

routes.post('/', AuthController.login)
// routes.post('/change-password', [checkJwt], AuthController.changePassword)

module.exports = routes