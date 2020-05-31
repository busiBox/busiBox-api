import { Router } from 'express'

const routes = Router()

routes.get('/', (_, res) => { return res.json({ message: "Hello, busiBoxer :)" }) })

module.exports = routes