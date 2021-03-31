const User = require('../models/user');

module.exports = {
    // C
    createUser: (req,res) => {
        // check if a User with that name exists
        // if not, add it. if yes, error
        User.exists({ username: req.body.username })
            .then(exists => exists ? Promise.reject({ errors: { username: { message: "A  User with that username exists." } } }) : User.exists({email: req.body.email}))
            .then(exists => exists ? Promise.reject({errors: {email: {messages: "A user with that email already exists"} } }) : User.create(req.body))
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    createPost: (req,res) => {
        console.log(req.body)
        // User.exists({ _id: req.params.id, "Posts.body": req.body.name })
        //     .then(exists => exists ? 
        //         Promise.reject({ name: { message: "You've already left a Post on this User" } }) 
        //         : 
                User.findOneAndUpdate({ username: req.params.username }, { $push: { posts: req.body } }, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => {
                // console.log(err);
                if(err.errors){
                    res.json({ message: "error", errors: err.errors.Posts.errors })
                } else {
                    res.json({ message: "error", errors: err})
                }
            });
    },
    // R
    getAllUsers: (req,res) => {
        User.find()
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAllPosts: (req,res) => {
        User.find()
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getOnePost: (req,res) => {
        User.findById(req.params.id)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAUser: (req, res) => {
        User.findOne(req.params.username)
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // U
    updatePost: (req,res) => {
        User.exists({ name: req.body.name, _id: { $ne: req.params.id }})
            .then(exists => exists ? 
                Promise.reject({ errors: { name: { message: "Another User with that name exists"}}}) 
                : User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }))
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    // D
    deletePost: (req,res) => {
        User.remove({ _id: req.params.id })
            .then(data => res.json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}