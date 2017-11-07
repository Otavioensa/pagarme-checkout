'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/', routes)

app.use((req, res, next) => {
  const err = new Error('Resource not found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).render('error', { message: err.message})
})

export default app
