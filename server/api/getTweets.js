const Twitter = require('twitter')
const auth = require('../config/config.json')
const formatTweets = require('../modules/formatTweets.js')

let twitter = new Twitter({
  consumer_key: auth.consumerApiKey,
  consumer_secret: auth.consumerApiSecret,
  access_token_key: auth.accessToken,
  access_token_secret: auth.accessTokenSecret
})



module.exports = (req, res) => {

  const hashtag = req.query.hashtag;
  const city = req.query.city;

  twitter.get('search/tweets', {
    q: `#${hashtag} lang:en place:(Boston)`,
    count: 100
  }, (err, data, result) => {
    // if (err) throw err

    console.log(data)

    data = formatTweets(data)

    res.status(200)
    res.json(data)
  })





}
