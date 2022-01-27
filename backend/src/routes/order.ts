import Router = require('@koa/router')
import { OrderRepository, OrderSchema } from '../repositories/order'

const order = new Router()

order.get('/', async (ctx, next) => {
  ctx.body = await OrderRepository.findAll()
})

order.get('/:id', async (ctx, next) => {
  ctx.body = await OrderRepository.findOne(ctx.params.id)
})

order.get('/:id/items', async (ctx, next) => {
  ctx.body = await OrderRepository.findSpecific(ctx.params.id, ['items'])
})

order.delete('/:id', async (ctx, next) => {
  ctx.body = await OrderRepository.deleteOne(ctx.params.id)
})

order.post('/', async (ctx, next) => {
  const data = ctx.request.body
  try {
    const parsedData = OrderSchema.parse(data)
    ctx.body = await OrderRepository.insertOne(parsedData)
  } catch {
    ctx.status = 403
    ctx.body = {error: 'so bad'}
  }
})

export { order }