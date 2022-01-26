import { z } from 'zod'
import { repositoryFactory } from "../factories/repository";

const COLLECTION_NAME = 'clients'

const ClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1)
})

type Client = z.infer<typeof ClientSchema> & {
  _id: string
}

const ClientRepository = repositoryFactory<Client>(COLLECTION_NAME)

export { ClientRepository, ClientSchema }
