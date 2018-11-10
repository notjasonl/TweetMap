const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser)

app.get('/api/', (req, res) => {

})

app.get('/api/getTweets', (req, res) => {

})