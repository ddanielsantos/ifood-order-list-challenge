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
  ctx.body = await OrderRepository.findOne(ctx.params.id)
})

router.delete('/orders/:id', async (ctx, next) => {
  ctx.body = await OrderRepository.deleteOne(ctx.params.id)
})

router.post('/orders', async (ctx, next) => {
  ctx.body = await OrderRepository.insertOne(ctx.request.body)
})

export { router }