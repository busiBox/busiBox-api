import { Router } from 'express'
import ResourceController from '../controllers/ResourceController'
import { checkJwt } from '../middlewares/checkJwt'
import { checkRole } from '../middlewares/checkRole'
import { ROLES } from '../utils/roles'

const routes = Router()

routes.post('/', [checkJwt, checkRole([ROLES.ADMIN])], ResourceController.create)
routes.get('/', [checkJwt, checkRole([ROLES.ADMIN])], ResourceController.index)
routes.get('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], ResourceController.getOne)
routes.put('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], ResourceController.update)
routes.post('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], ResourceController.inactivate)

module.exports = routes