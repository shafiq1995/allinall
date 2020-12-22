require('./db')
const express = require('express')
const bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.listen(4001, ()=>console.log('Server is starting at port no: 4001'))