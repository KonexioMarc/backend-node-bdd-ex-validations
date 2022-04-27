const express = require('express')
const app = express()
const port = 3002
const homeRoute = require('./routes/home')
const helloRoute = require('./routes/hello')

app.use(express.json())

app.use('/', homeRoute)
app.use('/hello', helloRoute)

app.listen(port, () => console.log('The server is at port', port))

