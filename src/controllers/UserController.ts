import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index(_: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find({ active: true })

      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const user = await User.findOne({ _id })

      if (!user) {
        return res.status(404).json({ message: `User not found! Please, verify the given _id` })
      }

      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)

      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const user = await User.updateOne({ _id }, req.body)

      if (user.nModified === 0) {
        return res.status(404).json({ message: `User not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `User updated successfully!` })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }

  public async inactivate(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const user = await User.updateOne({ _id }, { active: false })

      if (user.nModified === 0) {
        return res.status(404).json({ message: `User not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `User inactivated successfully!` })
    } catch (error) {
      return res.status(400).json(error)
    }
  }


}

export default new UserController()

