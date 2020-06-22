import { Request, Response } from 'express'
import Product from '../schemas/Product'

class ProductController {
  public async index(_: Request, res: Response): Promise<Response> {
    try {
      const products = await Product.find({ active: true })

      return res.status(200).json(products)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const product = await Product.findOne({ _id })

      if (!product) {
        return res.status(404).json({ message: `Product not found! Please, verify the given _id` })
      }

      return res.status(200).json(product)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const product = await Product.create(req.body)

      return res.status(201).json(product)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const product = await Product.updateOne({ _id }, req.body)

      if (product.nModified === 0) {
        return res.status(404).json({ message: `Product not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `Product updated successfully!` })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }

  public async inactivate(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = req.params
      const product = await Product.updateOne({ _id }, { active: false })

      if (product.nModified === 0) {
        return res.status(404).json({ message: `Product not found! Please, verify the given _id` })
      }

      return res.status(200).json({ message: `Product inactivated successfully!` })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new ProductController()

