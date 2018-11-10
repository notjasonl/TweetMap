const express = require('express')
const bodyParser = require('body-parser')
const axois = require('axois')
const Twitter = require('twitter')
const auth = require('config/config.json')

const app = express()

app.use(bodyParser)

app.get('/api/', (req, res) => {

})

app.get('/api/getTweets', (req, res) => {
  let hashtag = req.query.hashtag;

  var client = new Twitter({
    consumer_key: auth.twitter-api,
    consumer_secret: auth.twitter-secret,
    bearer_token: auth.bearer
  })
})
