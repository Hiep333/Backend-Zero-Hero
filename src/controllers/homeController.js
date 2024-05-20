const connection = require('../config/database.js')

const getHomePage = (req, res) => {
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

const postCreateUser = async (req, res) => {
  //preocess data
  let { email, username, city } = req.body
  console.log(email, username, city)

  let [result,fields] = await connection.query(
    `INSERT INTO users (email, username, city) VALUES (?,?,?)`,
    [email, username, city]
  );
  res.send('Created user successfully');
}



const getCreatePage = (req, res) => {
  return res.render('create.ejs')
}
module.exports = {
  getHomePage,
  getABC,
  hiep,
  postCreateUser,
  getCreatePage
}
