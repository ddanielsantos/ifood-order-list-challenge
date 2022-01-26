import Router = require('@koa/router')
import { OrderRepository, OrderSchema } from '../repositories/order'

const router = new Router()

router.get('/orders', async (ctx, next) => {
  ctx.body = await OrderRepository.findAll()
})

router.get('/orders/:id', async (ctx, next) => {
  ctx.body = await OrderRepository.findOne(ctx.params.id)
})

router.get('/orders/:id/items', async (ctx, next) => {
  ctx.body = await OrderRepository.findSpecific(ctx.params.id, ['items'])
})

router.delete('/orders/:id', async (ctx, next) => {
  ctx.body = await OrderRepository.deleteOne(ctx.params.id)
})

router.post('/orders', async (ctx, next) => {
  const data = ctx.request.body
  try {
    const parsedData = OrderSchema.parse(data)
    ctx.body = await OrderRepository.insertOne(parsedData)
  } catch {
    ctx.status = 403
    ctx.body = {error: 'so bad'}
  }
})

export { router as order }