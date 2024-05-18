const connection = require('../config/database.js')

const getHomePgage = (req, res) => {
  //preocess data
  //call model
  let users = []
  connection.query('SELECT * FROM users', (err, result, fields) => {
    users = result
    console.log('>>>result', result)
    console.log('>>>check users: ', users)
    res.send(JSON.stringify(users));
  })
 
}

const getABC = (req, res) => {
  res.send('check abc!')
}

const hiep = (req, res) => {
  // res.send('<h1>hiep ne</h1>')
  res.render('sample.ejs')
}

module.exports = {
  getHomePgage,
  getABC,
  hiep
}
