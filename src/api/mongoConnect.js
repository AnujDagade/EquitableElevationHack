import { MongoClient } from "mongodb";

const URI = ""

const client = new MongoClient(
    URI
)

let conn = null, coll = null

function initDB() {
    
        client.connect()
        conn = client.db("Hope")
        coll = conn.collection('victims')
    
    
}

initDB()

if(conn && coll){
    try {
        const result = await coll.insertOne({name:"Drcool"})
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        client.close()
    }
} else
{
    console.error(conn)
}