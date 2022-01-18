import { repositoryFactory } from "../factories/repository";

const COLLECTION_NAME = 'clients'

type Client = {
  _id: string,
  name: string,
  email: string,
  phone: string
}

const ClientRepository = repositoryFactory<Client>(COLLECTION_NAME)

export { ClientRepository, Client }
