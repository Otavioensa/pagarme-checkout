'use strict'

import { config } from 'dotenv'
config()

const serverConfig = {
  port: process.env.PORT
}

export default serverConfig
