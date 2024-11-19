const express = require('express');
const app = express();

const PORT = 3000
//add a logging middleware function
app.use((req, res, next) => {
    console.log('Middleware is working');
    console.log(`${req.method} request to ${req.url}`);
    next() // pass control to the next middleware or route
})

// add express.json middle to the app
app.use(express.json())

//this line serves a static file
app.use(express.static('public'))

//add a post route to handle json requests
app.post('/api/data', (req, res) => {
    const data = req.body //access the json data from the request body
    res.send(`recieved JSON data: ${JSON.stringify(data)}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});
 // add more routes
app.get('/about', (req, res) => {
    res.send('This is a about page')
})

app.get('/contact', (req, res) => {
    res.send('Contact us at Contact@gmail.com')
})

//added a new route to handle query parameters

app.get('/search', (req, res) => {
    let searchParam = req.query.query
    if(searchParam){
        res.send(`You searched for : ${searchParam}`)
    }else{
        res.send('No search term provided')
    }
})

// add new route to use route parameters (these are the place holders in URL denoted by ':', eg:'/user/:id)

app.get('/user/:id', (req, res) => {
    const userId = req.params.id //extract id prameter
    res.send(`UserId: ${userId}`)
})

//lets combine both query params and route params

app.get('/product/:id', (req, res) => {
    let productId = req.params.id;
    let sortBy = req.query.sort;
    res.send(`Product ID: ${productId}, Sort By: ${sortBy || 'default'}`)
})

//listens to the port at 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})