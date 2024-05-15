const express = require('express') // commonjs
//import express from 'express'; // es modules

const app = express() // app express
const port = process.env.PORT // port => hardcode
const hostname = process.env.HOSTNAME
require('dotenv').config()

console.log('>>> check env:', process.env) // can remove this

//config template engine
app.set('views', './src/views')
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

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
  console.log(`Example app listening on port ${port}`)
})
