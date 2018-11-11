const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.get('/api/getTweetsFromCity', require('./api/getTweetsFromCity.js'))
app.get('/api/getCitySummary', require('./api/getCitySummary.js'))

app.listen(PORT)
console.log('Server listening on: ' + PORT)
