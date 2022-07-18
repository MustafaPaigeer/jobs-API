const express = require('express')
const router = express.Router()

const {login, register } = reguire('../contoller/auth')

router.post('/register', register)
router.post('/login', login)


module.exports = router