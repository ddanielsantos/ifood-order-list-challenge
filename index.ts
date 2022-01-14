import Koa from 'koa'
import dotenv from 'dotenv'
import { router } from './src/routes/'

dotenv.config()

const app = new Koa()

const PORT = process.env.SERVER_PORT

app.use(router.routes())

app.listen(PORT, () => console.log(`servidor rodando em 'http://localhost:${PORT}'`))
