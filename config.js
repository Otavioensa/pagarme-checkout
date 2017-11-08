'use strict'

import { config } from 'dotenv'
config()

const server = {
  port: process.env.PORT
}

const keys = {
  api_key: process.env.API_KEY,
  encryption_key: process.env.ENCRYPTION_KEY,
  card_id: process.env.CARD_ID,
}

export { server, keys}
