const express = require('express');
const app = express();

const PORT = 3000
//add a logging middleware function
app.use((req, res, next) => {
    console.log('Middleware is working');
    console.log(`${req.method} request to ${req.url}`);
    next() // pass control to the next middleware or route
})

//this line serves a static file
app.use(express.static('public'))

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

//listens to the port at 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})