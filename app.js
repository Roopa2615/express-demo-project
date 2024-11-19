const express = require('express');
const app = express();

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/about', (req, res) => {
    res.send('This is a about page')
})

app.get('/contact', (req, res) => {
    res.send('Contact us at Contact@gmail.com')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})