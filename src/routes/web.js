const express = require('express')
const router = express.Router()

//khai bao routes
router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/abc', (req, res) => {
  res.send('check abc!')
})

router.get('/hiep', (req, res) => {
  // res.send('<h1>hiep ne</h1>')
  res.render('sample.ejs')
})

module.exports = router // export default
