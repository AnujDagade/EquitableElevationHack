import { MongoClient } from "mongodb";


  let client = null
  let result = null

  const URI = "mongodb+srv://hope:hope@hope.sigli8u.mongodb.net/?retryWrites=true&w=majority"

  client = new MongoClient(
    URI
  )
  let conn = null



  try {
    const data = JSON.parse(JSON.stringify({email:"LAV"}))
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


    client.close()
  