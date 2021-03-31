const express = require('express');
const app = express()
const cors = require('cors')

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())
require('./routes/routes')(app);

app.listen(8000, ()=> console.log("server is up and running"))