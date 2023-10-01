// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { MongoClient } from "mongodb";

const handler = async (event) => {

  let client = null
  let result = null

  const URI = "mongodb+srv://hope:hope@hope.sigli8u.mongodb.net/?retryWrites=true&w=majority" //process.env.VITE_APP_MONGO_DB_CONNECTIONSTRING

  client = new MongoClient(
    URI
  )
  let conn = null



  try {
    const data = JSON.parse(event.body)
    client.connect()
    conn = client.db("Hope")
    const ngo = conn.collection("NGO")
    result = await ngo.insertOne(data)
    console.warn(`Id ${result}`)
    // for await (const doc of result) {
    //     console.log(doc);
    // }
  } catch (error) {
    console.log(error)
  }


  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ info: result }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  } finally {
    client.close()
  }
}




export { handler }
