import { CLIENT, DB } from '../db/mongo'
import { WithId, InsertOneResult, OptionalUnlessRequiredId } from "mongodb"

type Repository<T> = {
  findAll: () => Promise<WithId<T>[]>,
  insertOne: (document: OptionalUnlessRequiredId<T>) => Promise<InsertOneResult<T>>
}

function repositoryFactory<T>(collectionName: string): Repository<T> {
  const COLLECTION = DB.collection<T>(collectionName)

  const repository: Repository<T> = {
    findAll: async function (): Promise<WithId<T>[]> {
      await CLIENT.connect()
      const documents = await COLLECTION.find({}).toArray()
      await CLIENT.close()

      return documents
    },
    insertOne: async function (document: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
      await CLIENT.connect()
      const serverResponse = COLLECTION.insertOne(document)
      await CLIENT.close()

      return serverResponse
    }
  }

  return repository
}

export { repositoryFactory }
