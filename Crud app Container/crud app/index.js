require('./db')
const bodyParser = require('body-parser')
const express = require('express')

var postMessageRoutes = require('./controllers/postmessagesControllers')

var app = express()

app.use(bodyParser.json())
app.listen(4000, ()=>console.log('Server Started at : 4000')) 

app.use('/postMessages', postMessageRoutes)