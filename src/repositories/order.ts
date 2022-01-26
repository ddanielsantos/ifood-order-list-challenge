import { z } from 'zod'
import { repositoryFactory } from '../factories/repository'

const COLLECTION_NAME = 'orders'

const ItemSchema = z.object({
  quantity: z.number().positive(),
  price: z.number().positive()
})

const OrderSchema = z.object({
  clientId: z.string().uuid(),
  restaurantId: z.string().uuid(),
  createdAt: z.string(),
  confirmedAt: z.string(),
  items: z.array(ItemSchema).min(1)
})

type Order = z.infer<typeof OrderSchema>

const OrderRepository = repositoryFactory<Order>(COLLECTION_NAME)

export { OrderRepository, OrderSchema }
