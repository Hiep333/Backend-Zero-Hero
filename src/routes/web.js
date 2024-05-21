const express = require('express')
const {
  getHomePage,
  getABC,
  hiep,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser
} = require('../controllers/homeController')
const router = express.Router()

//khai bao routes
router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/hiep', hiep)

//create user routes
router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)

//update user routes
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser);

//delete user routes
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)

module.exports = router // export default
