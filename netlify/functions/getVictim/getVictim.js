// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { MongoClient } from "mongodb"
const handler = async (event) => {
  let users = []
  
    const URI = "mongodb+srv://hope:hope@hope.sigli8u.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(
      URI
    )
    let conn = null

    try {
      client.connect()
      conn = client.db("Hope")
      const victims = conn.collection("victims")
      const result = victims.find()
      for await (doc of result) {
        users.push(doc)
        console.log(users);
      }
    } catch (error) {
      console.error(error)
    }
    finally{
      client.close()
    }
   

  try {
    
    console.log(users);
    return {
      statusCode: 200,
      body: JSON.stringify(
        users
      ),


    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }
