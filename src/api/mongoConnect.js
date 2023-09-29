import { MongoClient } from "mongodb";

const URI = "mongodb+srv://hope:hope@hope.sigli8u.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(
    URI
)
console.log("befire conn");
let conn = null, coll = null

function initDB() {
    try {
        client.connect()
        conn = client.db("Hope")
    } catch (error) {
        console.error(error)
    }
    finally{
        return conn
    }
}



export async function saveToNgo(ngoInfo) {
    initDB()
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
    finally{
        client.close()
    }
}


export  async function saveToVictim(victimInfo) {
    let result = null
    const victim = conn.collection("victims")

    try {

        result = await victim.insertOne(victimInfo)
       
    } catch (error) {
        console.log(error)
    }
    finally{
        client.close()
    }
}
