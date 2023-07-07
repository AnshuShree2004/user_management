
const express = require('express')
const dbConnection = require('./confiq/dbConfiq')
const userRouter = require('./router/userRouter')
const cors = require('cors')

const app = express()

dbConnection()


app.use(express.json())
app.use(cors())

app.use("/" , userRouter)

module.exports = app