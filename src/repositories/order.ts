import { CLIENT, DB } from '../db/mongo'

const COLLECTION_NAME = 'orders'
const COLLECTION = DB.collection<Order>(COLLECTION_NAME)

type Item = {
  description: string,
  quantity: number,
  unitPrice: number
}

type Items = Item[]

type Order = {
  uuid: string,
  date: string,
  clientName: string,
  phone: string,
  email: string,
  items: Items
}

const OrderRepository = {
  findAll: async function () {
    await CLIENT.connect()
    const documents = await COLLECTION.find({}).toArray()
    await CLIENT.close()

    return documents
  },

  findOne: async function (uuid: Order['uuid']) {
    await CLIENT.connect()
    const document = await COLLECTION.findOne({ uuid })
    await CLIENT.close()

    return document
  },

  deleteOne: async function (uuid: Order['uuid']) {
    await CLIENT.connect()
    const serverResponse = await COLLECTION.deleteOne({ uuid })
    await CLIENT.close()

    return serverResponse
  },

  insertOne: async function (document: Order) {
    await CLIENT.connect()
    const serverResponse = await COLLECTION.insertOne(document)
    await CLIENT.close()

    return serverResponse
  }
}

export { OrderRepository, Order }