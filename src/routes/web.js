const express = require('express')
const { getHomePgage, getABC, hiep, postCreateUser } = require('../controllers/homeController')
const router = express.Router()

//khai bao routes
router.get('/', getHomePgage)
router.get('/abc', getABC)
router.get('/hiep', hiep)

router.post('/create-user',postCreateUser);


module.exports = router // export default
