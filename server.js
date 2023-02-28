const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/route1', (req, res) => {
    res.status(301).send('Redirection')
})

app.get('/route2', (req, res) => {
    res.status(404).send('Not Found Page')
})

app.get('/route3', (req, res) => {
    res.status(500).send('Server Error')
})


app.listen(8000, () => {
    console.log('Server is running');
})