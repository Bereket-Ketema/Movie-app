import {Client, Databases, ID, Query} from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const APPWRITE= import.meta.env.VITE_APPWRITE_ENDPOINT

const client = new Client()
  .setEndpoint(APPWRITE)
  .setProject(PROJECT_ID)

const database = new Databases(client);
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('searchTerm', searchTerm)
    ])

    if(result.documents.length > 0){
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1
      })
    }else{
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique)
    }
  }catch(error){
    console.error(error);
  }
}