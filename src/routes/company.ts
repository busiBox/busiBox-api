import { Router } from 'express'
import CompanyController from '../controllers/CompanyController'
import { checkJwt } from '../middlewares/checkJwt'
import { checkRole } from '../middlewares/checkRole'
import { ROLES } from '../utils/roles'

const routes = Router()

routes.post('/', [checkJwt, checkRole([ROLES.ADMIN])], CompanyController.create)
routes.get('/', [checkJwt, checkRole([ROLES.ADMIN])], CompanyController.index)
routes.get('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], CompanyController.getOne)
routes.put('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], CompanyController.update)
routes.post('/:_id', [checkJwt, checkRole([ROLES.ADMIN])], CompanyController.inactivate)

module.exports = routes