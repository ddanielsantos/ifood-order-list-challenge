import { CLIENT, DB } from '../db/mongo'
import { WithId, InsertOneResult, OptionalUnlessRequiredId, ObjectId, Filter, DeleteResult } from "mongodb"

type Repository<T> = {
  findAll: () => Promise<WithId<T>[]>,
  findOne: (id: string) => Promise<WithId<T> | null>,
  findSpecific: (id: string, attributes: (keyof T)[]) => Promise<any[]>,
  insertOne: (document: OptionalUnlessRequiredId<T>) => Promise<InsertOneResult<T>>,
  deleteOne: (id: string) => Promise<DeleteResult>
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

    findOne: async function (id: string): Promise<WithId<T> | null> {
      await CLIENT.connect()
      const query = new ObjectId(id)

      const document = await COLLECTION.findOne(query as Filter<T>)
      await CLIENT.close()

      return document
    },

    findSpecific: async function (id: string, attributes: (keyof  T)[]) {
      type SelectedAttributes = {
        [key in (keyof T)]?: 1 | 0;
      }

      const SelectedAttributes: SelectedAttributes = {}

      for(let i = 0; i < attributes.length; i++){
        SelectedAttributes[attributes[i]] = ('_id' === attributes[i] ? 0 : 1)
      }

      const query = new ObjectId(id)

      await CLIENT.connect()
      const documents = await COLLECTION.find(query as Filter<T>).project(SelectedAttributes).toArray()
      await CLIENT.close()

      return documents
    },

    insertOne: async function (document: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
      await CLIENT.connect()
      const serverResponse = await COLLECTION.insertOne({...document})
      await CLIENT.close()

      return serverResponse
    },

    deleteOne: async function (id: string): Promise<DeleteResult> {
      const query = ({ _id: new ObjectId(id) }) as unknown as Filter<T>
      
      await CLIENT.connect()
      
      const serverResponse = await COLLECTION.deleteOne(query)
      await CLIENT.close()

      return serverResponse
    }
  }

  return repository
}

export { repositoryFactory }
