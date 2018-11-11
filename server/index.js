const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser)

const handler = require('./api/getTweets.js')

app.get('/api/getTweets', handler)

app.listen(PORT)
console.log('Server listening on: ' + PORT)
