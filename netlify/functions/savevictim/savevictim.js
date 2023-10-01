// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { MongoClient } from "mongodb";

const handler = async (event) => {

  console.log(import.meta.env);

  function initDB() {
    const URI = process.env.VITE_APP_MONGO_DB_CONNECTIONSTRING

    const client = new MongoClient(
      URI
    )
    let conn = null

    try {
      client.connect()
      conn = client.db("Hope")
    } catch (error) {
      console.error(error)
    }
    finally {
      return conn
    }
  }



  async function saveToVictim(ngoInfo) {
    const conn = initDB()
    let result = null
    const victim = conn.collection("victims")

    try {

      result = await victim.insertOne(ngoInfo)

      // for await (const doc of result) {
      //     console.log(doc);
      // }
    } catch (error) {
      console.log(error)
    }
   
  }


  try {
  
    const data = JSON.parse(event.body)
    saveToVictim(data)

    return {
      statusCode: 200,
      body: JSON.stringify({info:data}),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}


export  { handler }
