const mongosse = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuidv1')

const userSchema = new mongosse.Mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: { 
        type: String,
        trim: true,
        required: true,
        unique: 32

    },
    hashed_password: {
        type: String,
        required: true,
    }

})