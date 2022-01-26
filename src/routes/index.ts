import Router = require('@koa/router')

import { order } from './order'

const router = new Router()

router.use(order.routes())
router.use(order.allowedMethods())

router.get('/', async (ctx, next) => {
  ctx.body = 'Ola'
})

export { router }