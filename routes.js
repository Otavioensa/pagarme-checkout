'use strict'

import Router from 'express'
import request from 'request-promise'
import { capture } from './payload'

const routes = Router()

routes.get('/', (req, res) => res.render('index'))

routes.post('/capture', (req, res) => {

  const {
    token,
    amount
  } = req.body

  return request(capture(token, amount))
})

export default routes
