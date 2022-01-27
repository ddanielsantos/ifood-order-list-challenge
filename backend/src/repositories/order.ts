import { z } from 'zod'
import { repositoryFactory } from '../factories/repository'

const COLLECTION_NAME = 'orders'

const ItemSchema = z.array(
  z.object({
    description: z.string().min(1),
    quantity: z.number().positive(),
    price: z.number().positive()
  })
)


const OrderSchema = z.object({
  client: z.string().min(1),
  restaurant: z.string().min(1),
  createdAt: z.string().min(1),
  confirmedAt: z.string(),
  items: ItemSchema.min(1)
})

export type Order = z.infer<typeof OrderSchema> & {
  _id?: string
}

const OrderRepository = repositoryFactory<Order>(COLLECTION_NAME)

export { OrderRepository, OrderSchema }
