const axios = require('axios')
const auth = require('../config/config.json')
const formatTweets = require('../modules/formatTweets.js')
const testData = require('../sample.json')

module.exports = (req, res) => {
  /*
  let hashtag = req.query.hashtag;

  const api = axios.create({
    baseURL: 'https://api.twitter.com/1.1',
    headers: {
      Authorization: auth.bearer
    },
    withCredentials: true
  })
  let url = "/search/tweets.json?q=%23" + hashtag + " lang%3Aen"
  api.get(url)
    .then(resp => {
      formatTweets()
    })
  */
  formatTweets(testData)
}
