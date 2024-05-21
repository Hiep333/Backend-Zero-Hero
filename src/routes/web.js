const express = require('express')
const {
  getHomePage,
  getABC,
  hiep,
  postCreateUser,
  getCreatePage,
  getUpdatePage
} = require('../controllers/homeController')
const router = express.Router()

//khai bao routes
router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/hiep', hiep)

router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

module.exports = router // export default
