import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import User, { IUserInterface } from "../schemas/User";
import config from "../config/config";

class AuthController {
  static login = async (req: Request, res: Response) => {
    console.log("---->>>>", req.body);

    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }

    let user: IUserInterface | null;

    try {
      user = await User.findOne({ email, password });
    } catch (error) {
      return res.status(401).send();
    }

    if (user) {
      const token = jwt.sign(
        { userId: user?._id, email: user?.email },
        config.jwtSecret,
        { expiresIn: "1h" }
      );

      return res.status(200).json({ token });
    } else {
      return res.status(400).json({ message: "Incorrect email or password" });
    }
  };
}

export default AuthController;
