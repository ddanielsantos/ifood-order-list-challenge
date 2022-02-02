import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import dotenv from 'dotenv'

import { router } from './src/routes/'

dotenv.config()

const app = new Koa()

const PORT = process.env.PORT || 3483

function getOrigin() {
  return process.env.ORIGIN ?? 'http://localhost:3000'
}

app.use(cors({
  origin: getOrigin
}))

app.use(bodyParser())
app.use(router.routes())

app.listen(PORT, () => console.log(`servidor rodando em 'http://localhost:${PORT}'`))
