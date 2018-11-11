const Twit = require('twit')
const auth = require('../config/config.json')
const formatTweets = require('../modules/formatTweets.js')

let twitter = new Twit({
  consumer_key: auth.consumerApiKey,
  consumer_secret: auth.consumerApiSecret,
  access_token: auth.accessToken,
  access_token_secret: auth.accessTokenSecret
})



module.exports = (req, res) => {

  const hashtag = req.query.hashtag;
  const city = req.query.city;

  twitter.get('search/tweets', {
    q: `#${hashtag} lang:en place:${city}`
  }, (err, data, res) => {
    if (err) throw err

    console.log(res)

    data = formatTweets(res)

    res.status(200)
    res.end(data)
  })





}
