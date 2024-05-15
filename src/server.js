require('dotenv').config()
const express = require('express') // commonjs
const path = require('path') // import module path
//import express from 'express'; // es modules
const configViewEngine = require('./config/viewEngine')
const app = express() // app express
const port = process.env.PORT || 3030 // port => hardcode
const hostname = process.env.HOSTNAME || 'localhost'

//config template engine
configViewEngine(app)

//khai bao routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('check abc!')
})

app.get('/hiep', (req, res) => {
  // res.send('<h1>hiep ne</h1>')
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
