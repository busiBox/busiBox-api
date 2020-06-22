import { Request, Response } from 'express'
import Resource from '../schemas/Resource'

class ResourceController {
  public async index(_: Request, res: Response): Promise<Response> {
    try {
      const resources = await Resource.find({ active: true })

      return res.status(200).json(resources)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const resource = await Resource.findOne({ _id })

      if (!resource) {
        return res.status(404).json({ message: `Resource not found! Please, verify the given _id` })
      }

      return res.status(200).json(resource)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const resource = await Resource.create(req.body)

      return res.status(201).json(resource)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const resource = await Resource.updateOne({ _id }, req.body)

      if (resource.nModified === 0) {
        return res.status(404).json({ message: `Resource not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `Resource updated successfully!` })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }

  public async inactivate(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const resource = await Resource.updateOne({ _id }, { active: false })

      if (resource.nModified === 0) {
        return res.status(404).json({ message: `Resource not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `Resource inactivated successfully!` })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new ResourceController()