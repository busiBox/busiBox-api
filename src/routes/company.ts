import { Router } from 'express'
import CompanyController from '../controllers/CompanyController'

const routes = Router()

routes.post('/', CompanyController.create)
routes.get('/', CompanyController.index)
routes.get('/:_id', CompanyController.getOne)
routes.put('/:_id', CompanyController.update)
routes.post('/:_id', CompanyController.inactivate)

module.exports = routes