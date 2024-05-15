const express = require('express') // commonjs
const path = require('path');// import module path
//import express from 'express'; // es modules

const app = express() // app express
const port = process.env.PORT || 8080 // port => hardcode
const hostname = process.env.HOSTNAME || 'localhost'
require('dotenv').config()

console.log('>>> check env:', process.env) // can remove this

//config template engine
app.set('views', './src/views')
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')));

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
