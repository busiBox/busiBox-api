import { Request, Response } from 'express'
import Company from '../schemas/Company'

class CompanyController {
  public async index(_: Request, res: Response): Promise<Response> {
    try {
      const companies = await Company.find({ active: true })

      return res.status(200).json(companies)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const company = await Company.findOne({ _id })

      if (!company) {
        return res.status(404).json({ message: `Company not found! Please, verify the given _id` })
      }

      return res.status(200).json(company)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const company = await Company.create(req.body)

      return res.status(201).json(company)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const company = await Company.updateOne({ _id }, req.body)

      if (company.nModified === 0) {
        return res.status(404).json({ message: `Company not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `Company updated successfully!` })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }

  public async inactivate(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const company = await Company.updateOne({ _id }, { active: false })

      if (company.nModified === 0) {
        return res.status(404).json({ message: `Company not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `Company inactivated successfully!` })
    } catch (error) {
      return res.status(400).json(error)
    }
  }


}

export default new CompanyController()

