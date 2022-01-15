import { repositoryFactory } from '../factories/repository'

const COLLECTION_NAME = 'orders'

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

const OrderRepository = repositoryFactory<Order>(COLLECTION_NAME)

export { OrderRepository, Order }
