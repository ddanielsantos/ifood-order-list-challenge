import { MongoClient } from "mongodb"
import * as DotEnv from 'dotenv'

DotEnv.config()

const URL = process.env.DATABASE_URL || 'a'
const CLIENT = new MongoClient(URL)

const DB_NAME = process.env.DATABASE_NAME
const DB = CLIENT.db(DB_NAME)

export { CLIENT, DB }
