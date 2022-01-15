import Router = require('@koa/router')
import { OrderRepository } from '../repositories/order'

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = 'Ola'
})

router.get('/orders', async (ctx, next) => {
  ctx.body = await OrderRepository.findAll()
})

router.get('/orders/:id', async (ctx, next) => {
  const res = await OrderRepository.findOne(ctx.params.id)
  console.log(res)
  ctx.body = res
})

export { router }