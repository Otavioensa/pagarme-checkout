'use strict'

import Router from 'express'

const routes = Router()

routes.get('./', (req, res) => es.render('index'))

routes.post('/checkout', (req, res) => {

  res.send({ message: 'yas!'})
})

export default routes
