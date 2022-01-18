import { repositoryFactory } from '../factories/repository'

const COLLECTION_NAME = 'orders'

type Items = {
  description: string,
  quantity: number,
  price: number
}[]


type Order = {
  _id: string,
  clientId: string,
  restaurantId: string,
  createdAt: string,
  confirmedAt: string,
  items: Items
}

const OrderRepository = repositoryFactory<Order>(COLLECTION_NAME)

export { OrderRepository, Order }
