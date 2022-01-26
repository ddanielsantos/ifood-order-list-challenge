import Router = require('@koa/router')
import { ClientRepository, ClientSchema } from '../repositories/client'
import crypto from 'crypto' // move to separate file/function

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
  const data = ctx.request.body
  try {
    const parsedData = ClientSchema.parse(data)

    ctx.body = await ClientRepository.insertOne({_id: crypto.randomUUID(), ...parsedData}) // move to separate file/function
  } catch {
    ctx.status = 403
    ctx.body = {error: 'so bad'}
  }
})


export { router as client }