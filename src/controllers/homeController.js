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

const postCreateUser = (req, res) => {
  // let email = req.body.email;
  // let name = req.body.myname;
  // let city = req.body.city;
  let { email, username, city } = req.body
  console.log(email, username, city)

  connection.query(
    'insert into users (email, username, city) values (?,?,?)',
    [email, username, city],
    function (err, results) {
      console.log(results) // results contains rows returned by server
      res.send('Created user success') // fields contains extra meta data about results, if available
    }
  )
}
module.exports = {
  getHomePage,
  getABC,
  hiep,
  postCreateUser
}
