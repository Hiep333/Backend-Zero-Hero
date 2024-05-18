require('dotenv').config()
const express = require('express') // commonjs
//import express from 'express'; // es modules
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const mysql = require('mysql2')


const app = express() // app express
const port = process.env.PORT || 8080 // port => hardcode
const hostname = process.env.HOSTNAME || 'localhost'

//config template engine
configViewEngine(app)

//khai bao routes
app.use('/', webRoutes)

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'hoidanit',
  port: 3307
})

//simple query
connection.query('SELECT * FROM users', (err, result, fields) => {
  console.log('>>>result',result);
  console.log('>>>fields',fields);
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
