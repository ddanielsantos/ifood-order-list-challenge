import { MongoClient } from "mongodb"
import * as DotEnv from 'dotenv'

DotEnv.config()

const URL = process.env.DATABASE_URL || 'a'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'none'
const FORMATTED_PASSWORD = URL.replace('<password>', DATABASE_PASSWORD)

const FINAL_URL = process.env.ENVIRONMENT !== 'production' ? URL : FORMATTED_PASSWORD

const CLIENT = new MongoClient(FINAL_URL);

(async () => {
  await CLIENT.connect()
})()

const DB_NAME = process.env.DATABASE_NAME
const DB = CLIENT.db(DB_NAME)

export { DB }
