// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { MongoClient } from "mongodb";

const handler = async (event) => {


  function initDB() {
    const URI = "mongodb+srv://hope:hope@hope.sigli8u.mongodb.net/?retryWrites=true&w=majority"

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



  async function saveToNgo(ngoInfo) {
    const conn = initDB()
    let result = null
    const ngo = conn.collection("NGO")

    try {

      result = await ngo.insertOne(ngoInfo)

      // for await (const doc of result) {
      //     console.log(doc);
      // }
    } catch (error) {
      console.log(error)
    }
   
  }






  try {
    const data = JSON.parse(event.body)
    saveToNgo(data)
    return {
      statusCode: 200,
      body: JSON.stringify({info:data}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }
