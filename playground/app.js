import {MongoClient} from "mongodb"

import {uri} from './atlas_uri.js'

console.log(uri);
const client = new MongoClient(uri)

console.log(client);

const dbname = "Hope"

const connectToDatabase = async ()  => {
    try {
        await client.connect(db)
    } catch (error) {
        
    }
}