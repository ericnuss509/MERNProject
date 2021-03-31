// arussell@codingdojo.com Amanda
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mernproject',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('db connection established'))
    .catch(err => console.log('something went wrong', err))