const { response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/signin', (request, response) => {
  const { email, password } = request.body

  const statement = `SELECT name FROM userTB
                      WHERE email=? AND password=?;`

  db.pool.query(statement, [email, password], (error, user) => {
    response.send(utils.createResult(error, user))
  })
})

module.exports = router

