const {MongoClient}  = require("mongodb")
const url = "mongodb://localhost:27017"
const dbName = "dragonj"
const client = new MongoClient(url)

async function dbConnect() {
    let result = await client.connect()
    let db = result.db(dbName)
    return db.collection('mj')
}

module.exports = dbConnect