const connection = require('../config/database.js')

const getHomePgage = (req, res) => {
  //preocess data
  //call model

  return res.render('home.ejs')
}

const getABC = (req, res) => {
  res.send('check abc!')
}

const hiep = (req, res) => {
  // res.send('<h1>hiep ne</h1>')
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  console.log("check req.body :", req.body);
  res.send('create a new user')
}
module.exports = {
  getHomePgage,
  getABC,
  hiep,
  postCreateUser
}
