require('dotenv').config()
const express = require('express') // commonjs
//import express from 'express'; // es modules
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express() // app express
const port = process.env.PORT || 9999 // port => hardcode
const hostname = process.env.HOSTNAME || 'localhost'

//config template engine
configViewEngine(app)

//khai bao routes
app.use('/', webRoutes)

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
