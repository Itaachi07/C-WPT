const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.post('/add', (request, response) => {
  const { id, name, model } = request.body

  const statement = `INSERT INTO carsTB 
                    (id, name, model,price,car_color) 
                    VALUES (?,?,?,?,?)`

  db.pool.query(statement, [id,name, model], (error, note) => {
    response.send(utils.createResult(error, note))
  })
})

router.delete('/delete/:id', (request, response) => {
  const { id } = request.params

  const statement = `DELETE FROM  carsTB 
                      WHERE id = ?`

  db.pool.query(statement, [id], (error, note) => {
    response.send(utils.createResult(error, note))
  })
})

router.get('/get/:userId', (request, response) => {
  const { userId } = request.params

  const statement = `SELECT * from carsTB`

  db.pool.query(statement, [id], (error, note) => {
    response.send(utils.createResult(error, note))
  })
})

module.exports = router
