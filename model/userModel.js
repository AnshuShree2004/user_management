const mongoose = require('mongoose')


const userSchema = new mangoose.Schema({

    name: {
        type: String,
        required: [true, "Username is required"],
        maxLength: [50, "Uername is less than 50 characters"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase:true
    },

    password: {
        type: String,
        required: [true, "Username is required"],
        select: false
    }

})

const userModel = mongoose.model('User',userSchema)

module.exports = userModel