const mongoose = require('mongoose');
const protocolMongo = "mongodb"
const hostMongo = "localhost"
const portMongo = "27017"
const nomdeMongo = "user"

const DB_URI = process.env.MONGO_URL || `${protocolMongo}://${hostMongo}:${portMongo}/${nomdeMongo}`

mongoose.connect(DB_URI).then(() => {
    console.log(`*** CONNECTED TO ${DB_URI} ***`)
})