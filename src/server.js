require('dotenv').config()
const express = require('express') // commonjs
//import express from 'express'; // es modules
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database.js')

const app = express() // app express
const port = process.env.PORT || 8080 // port => hardcode
const hostname = process.env.HOSTNAME || 'localhost'

//config template engine
configViewEngine(app)

//khai bao routes
app.use('/', webRoutes)

// test connection

//simple query
connection.query('SELECT * FROM users', (err, result, fields) => {
  console.log('>>>result', result)
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
