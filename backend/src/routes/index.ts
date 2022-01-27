import Router = require('@koa/router')

import { order } from './order'

const router = new Router()

router.use('/api/orders', order.routes())
router.use('/api/orders', order.allowedMethods())

router.get('/api', async (ctx, next) => {
  ctx.body = 'Ola'
})

export { router }