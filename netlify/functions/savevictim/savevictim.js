// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { MongoClient } from "mongodb";

const handler = async (event) => {


  
    const URI = process.env.VITE_APP_MONGO_DB_CONNECTIONSTRING

    const client = new MongoClient(
      URI
    )
    let conn = null
    let result = null
    try {
      const data = JSON.parse(event.body)
      client.connect()
      conn = client.db("Hope")
      const victim = conn.collection("victims")
      result = await victim.insertOne(data)
    } catch (error) {
      console.error(error)
    }
    

  try {
  
    return {
      statusCode: 200,
      body: JSON.stringify({info:result}),
      headers:{
        Location:"https://gethope.netlify.app/"
      }
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
  finally{
    client.close()
  }
}


export  { handler }
