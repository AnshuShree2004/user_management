const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0/my_database"



const dbConnection =  async() => {

   await mongoose
      .connect(MONGODB_URL)
     .then((conn) => {

console.log(`Connnected to ${conn.connection.host}`)

     })
     .catch((error) => {
          console.log(error.message)
     })
}

module.exports = dbConnection