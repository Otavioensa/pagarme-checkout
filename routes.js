
import Router from 'express'
import request from 'request-promise'
import { capture, transaction } from './payload'

const routes = Router()

routes.get('/', (req, res) => res.render('index'))

routes.post('/capture', (req, res) => {
  const {
    token,
    amount,
  } = req.body

  return res.json(request(capture(token, amount)))
})

routes.post('/transaction', (req, res) => res.json(request(transaction(req.body))))

export default routes
