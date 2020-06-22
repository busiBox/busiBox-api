import { Router } from 'express'
import ProductController from '../controllers/ProductController'
import { checkJwt } from '../middlewares/checkJwt'
import { checkRole } from '../middlewares/checkRole'
import { ROLES } from '../utils/roles'

const routes = Router()

routes.post('/', [checkJwt, checkRole([ROLES.ADMIN])], ProductController.create)
routes.get('/', [checkJwt, checkRole([ROLES.ADMIN])], ProductController.index)
routes.get('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], ProductController.getOne)
routes.put('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], ProductController.update)
routes.post('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], ProductController.inactivate)

module.exports = routes