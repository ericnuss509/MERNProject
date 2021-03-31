const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postBody: {
        type: String,
        require: true,
        minlength: [20, "you need to make a post with at least 20 character"]
    },
}, {timestamps: true})

module.exports = PostSchema


// here is a post that will be an array

//  0      1  2   3     4     5    6   7    8
// [here, is, a post, that, will, be, an, array]

// dog, chick, tree, car

// [tree, is, chick, that, dog, be, an car]

// tree is chick that dog be an car