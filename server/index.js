const express = require('express')
const bodyParser = require('body-parser')
const axois = require('axois')

const app = express()

app.use(bodyParser)

app.get('/api/getTweets', require('./api/getTweets.js'))
