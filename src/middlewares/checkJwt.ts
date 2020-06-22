import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import config from '../config/config'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']
  let jwtPayload

  if (!token) {
    return res.status(401).json({ message: 'Access not allowed' })
  }

  try {
    jwtPayload = <any>jwt.verify(token.split(' ')[1], config.jwtSecret)

    res.locals.jwtPayload = jwtPayload
  } catch (error) {
    return res.status(401).json({ message: error });
  }

  const { userId, email } = jwtPayload
  const newToken = jwt.sign({ userId, email }, config.jwtSecret, {
    expiresIn: '1h'
  })
  res.setHeader('token', newToken)

  next()
}
