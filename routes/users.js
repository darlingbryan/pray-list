const express = require('express')
const router = express.Router()

const User = require('../models/Users')

//@route        POST api/users
//@desc         Register a user
//@access       Public
router.post('/', (req, res) => {
  res.json('User created.')
})

module.exports = router
