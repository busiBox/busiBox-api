import { Router } from 'express'
import UserController from '../controllers/UserController'
import { checkJwt } from '../middlewares/checkJwt'
import { checkRole } from '../middlewares/checkRole'
import { ROLES } from '../utils/roles'

const routes = Router()

routes.post('/', [checkJwt, checkRole([ROLES.ADMIN])], UserController.create)
routes.get('/', [checkJwt, checkRole([ROLES.ADMIN])], UserController.index)
routes.get('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], UserController.getOne)
routes.put('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], UserController.update)
routes.post('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], UserController.inactivate)

module.exports = routes