const axois = require('axois')
const Twitter = require('twitter')
const auth = require('config/config.json')

exports.default = (req, res) => {
  let hashtag = req.query.hashtag;

  var client = new Twitter({
    consumer_key: auth.twitter-api,
    consumer_secret: auth.twitter-secret,
    bearer_token: auth.bearer
  })
}