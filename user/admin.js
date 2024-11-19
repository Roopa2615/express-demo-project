const express = require('express')
const adminRoute = express.Router()

adminRoute.get('/:id', (req, res) => {
    const data = req.params.id
    res.send(`adminId : ${data}`)
})

adminRoute.post('/', (req, res) => {
    const data = req.body
    res.send(data)
})

module.exports = {adminRoute}
