import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (_, res) => {
  return res.json({ message: "Hello, busiBoxer :))" });
});

routes.get("/health-check", (_: Request, res: Response) => {
  return res.json({
    uptime: process.uptime(),
    message: "OK",
  });
});

module.exports = routes;
