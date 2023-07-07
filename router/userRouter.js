const express = require('express')
const { home, registerUser, loginUser } = require("../controller/userController")
const loginValidate = require('../middleware/loginValidate')
const registerValidate = require('../middleware/registerValidate')

const userRouter = express.Router()

userRouter.get("/register", registerValidate, registerUser)

userRouter.get("/login", loginValidate, loginUser)

module.exports = userRouter