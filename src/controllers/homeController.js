const connection = require('../config/database.js')
const { getAllUsers, getUserById } = require('../services/CRUDServices.js')
const getHomePage = async (req, res) => {
  //preocess data
  //call model
  let results = await getAllUsers()
  return res.render('home.ejs', { listUsers: results }) // read results
}

const getABC = (req, res) => {
  res.send('check abc!')
}

const hiep = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
  //preocess data
  let { email, username, city } = req.body //
  console.log(email, username, city)

  let [result, fields] = await connection.query(
    `INSERT INTO users (email, username, city) VALUES (?,?,?)`,
    [email, username, city]
  )
  res.send('Created user successfully')
}

const getCreatePage = (req, res) => {
  return res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
  const userID = req.params.id
  // get user information by id
  let user = await getUserById(userID)
  res.render('edit.ejs', { userEdit: user }) // x <-y
}
module.exports = {
  getHomePage,
  getABC,
  hiep,
  postCreateUser,
  getCreatePage,
  getUpdatePage
}
