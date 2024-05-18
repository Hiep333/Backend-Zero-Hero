const express = require('express')
const { getHomePgage, getABC, hiep } = require('../controllers/homeController')
const router = express.Router()

//khai bao routes
router.get('/', getHomePgage)

router.get('/abc', getABC)

router.get('/hiep', hiep)

module.exports = router // export default
