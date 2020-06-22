import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fs from 'fs'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middlewares()
    this.dotenv()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes(): void {
    fs.readdirSync(__dirname + '/routes')
      .map(file => {
        const routes = require(`./routes/${file}`);
        if (file.includes("index")) {
          this.express.use('/', routes)
        } else {
          this.express.use(`/${file.substring(0, file.indexOf('.'))}`, routes)
        }
      })
  }

  private dotenv(): void {
    dotenv.config()
  }
}

export default new App().express









