const express = require('express')
const productRouter = express.Router()

productRouter.get('/:id', (req, res) => {
    const data = req.params.id
    res.send(`productId : ${data}`)
})

productRouter.get('/', (req, res) => {
    res.send(`productId recieved`)
})

module.exports = {productRouter}
