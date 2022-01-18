import Router = require('@koa/router')
import { ClientRepository } from '../repositories/client'

const router = new Router()

router.get('/clients', async (ctx, next) => {
  ctx.body = await ClientRepository.findAll()
})

router.get('/clients/:id', async (ctx, next) => {
  ctx.body = await ClientRepository.findOne(ctx.params.id)
})

router.delete('/clients/:id', async (ctx, next) => {
  ctx.body = await ClientRepository.deleteOne(ctx.params.id)
})

router.post('/clients', async (ctx, next) => {
  ctx.body = await ClientRepository.insertOne(ctx.request.body)
})


export { router as client }