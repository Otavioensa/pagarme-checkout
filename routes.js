'use strict'

import Router from 'express'

const routes = Router()

routes.get('/', (req, res) => es.render('index'))

export default routes
