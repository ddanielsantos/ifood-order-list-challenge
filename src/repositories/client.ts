import { z } from 'zod'
import { repositoryFactory } from "../factories/repository";

const COLLECTION_NAME = 'clients'

const ClientSchema = z.object({
  _id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string()
})

type Client = z.infer<typeof ClientSchema>

const ClientRepository = repositoryFactory<Client>(COLLECTION_NAME)

export { ClientRepository, Client }
