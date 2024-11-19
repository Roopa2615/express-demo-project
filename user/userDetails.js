const express = require('express')
const userRoute = express.Router()

userRoute.get('/:id', (req, res) => {
    const data = req.params.id
    res.send(`userId : ${data}`)
})

userRoute.post('/', (req, res) => {
    const data = req.body
    res.send(data)
})

module.exports = {userRoute}
