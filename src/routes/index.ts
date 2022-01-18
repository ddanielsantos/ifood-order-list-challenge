import Router = require('@koa/router')

import { order } from './order'
import { client } from './client'

const router = new Router()

router.use(order.routes())
router.use(order.allowedMethods())

router.use(client.routes())
router.use(client.allowedMethods())

router.get('/', async (ctx, next) => {
  ctx.body = 'Ola'
})

export { router }