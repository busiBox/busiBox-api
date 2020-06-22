import { Request, Response, NextFunction } from 'express'

import User, { IUserInterface } from '../schemas/User'

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.userId;

    let user: IUserInterface | null
    try {
      user = await User.findOne({ _id: id })
    } catch (error) {
      res.status(401).send()
    }

    if (roles.indexOf(user!.role) > -1) {
      next()
    } else {
      return res.status(401).json({ message: 'This action is not allowed for this profile' })
    }

  }
}