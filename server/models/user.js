const mongoose = require('mongoose')
const PostSchema = require('./post')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: [3, "the User needs a username with 3 or more characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    posts: [PostSchema]
}, {timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User