const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/add', (request, response) => {
  const { userId, title, content } = request.body

  const statement = `INSERT INTO carsTB 
                    (id, name, model,price,car_color) 
                    VALUES (?,?,?,?,?)`

  db.pool.query(statement, [userId, title, content], (error, note) => {
    response.send(utils.createResult(error, note))
  })
})

router.delete('/delete/:id', (request, response) => {
  const { id } = request.params

  const statement = `DELETE FROM  note 
                      WHERE id = ?`

  db.pool.query(statement, [id], (error, note) => {
    response.send(utils.createResult(error, note))
  })
})

router.get('/get/:userId', (request, response) => {
  const { userId } = request.params

  const statement = `SELECT  
                      title, content from note
                      WHERE userId = ?`

  db.pool.query(statement, [userId], (error, note) => {
    response.send(utils.createResult(error, note))
  })
})

module.exports = router
