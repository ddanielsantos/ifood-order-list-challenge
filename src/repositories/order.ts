import { z } from 'zod'
import { repositoryFactory } from '../factories/repository'

const COLLECTION_NAME = 'orders'

const ItemSchema = z.object({
  _id: z.string().uuid(),
  quantity: z.number().positive(),
  price: z.number().positive()
})

const OrderSchema = z.object({
  _id: z.string(),
  clientId: z.string(),
  restaurantId: z.string(),
  createdAt: z.string(),
  confirmedAt: z.string(),
  items: z.array(ItemSchema)
})

type Order = z.infer<typeof OrderSchema>

const OrderRepository = repositoryFactory<Order>(COLLECTION_NAME)

export { OrderRepository, OrderSchema }
