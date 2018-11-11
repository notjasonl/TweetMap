const fetch = require('node-fetch')
const auth = require('../config/config.json')
const formatTweets = require('../modules/formatTweets.js')

module.exports = (req, res) => {

  const hashtag = req.query.hashtag;
  const city = req.query.city;

  const url = "https://api.twitter.com/1.1/tweets/search/30day/dev1.json?query=%23" + hashtag + "%20lang%3Aen%20place%3A" + city
  console.log(url)
  fetch(url, {
    method: "get",
    headers: {
      "Authorization": "Bearer " + auth.twitterBearer
      }
  })
  .then(res => res.json())
  .then(json => {
    console.log(json)
    let data = formatTweets(json["results"])
    res.status(200)
    res.json(data)
  })
}
