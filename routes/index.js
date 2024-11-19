const { adminRoute } = require("../user/admin");
const { productRouter } = require("../user/product");
const { userRoute } = require("../user/userDetails");
const express = require('express')
const router = express.Router()

const adminAuth = (req, res, next) => {
    console.log('Middleware is working');
    console.log(`${req.method} request to ${req.url}`);
    if(req.query.role !== 'admin'){
        return res.status(403).send('Unauthorised')
    }
    next() // pass control to the next middleware or route
}

const userAuth = (req, res, next) => {
    console.log('Middleware is working');
    console.log(`${req.method} request to ${req.url}`);
    if(req.query.role !== 'user'){
        return res.status(403).send('Unauthorised')
    }
    next() // pass control to the next middleware or route
}

router.use('/product', productRouter)
router.use('/user', userAuth, userRoute)
router.use('/admin',adminAuth, adminRoute)

module.exports = router