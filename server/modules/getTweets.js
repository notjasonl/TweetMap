const fetch = require('node-fetch')
const auth = require('../config/config.json')
const formatTweets = require('./formatTweets.js')

module.exports = (keyword, city) => {
  return new Promise((resolve, reject) => {
    const url = "https://api.twitter.com/1.1/tweets/search/30day/dev1.json?query=(%23" + keyword + "%20OR%20" + keyword + ")%20lang%3Aen%20place%3A" + city
    fetch(url, {
      method: "get",
      headers: {
        "Authorization": "Bearer " + auth.twitterBearer
        }
    })
    .then(res => res.json())
    .then(json => {
      let data = formatTweets(json["results"])
      resolve(data)
    })
    .catch(err => reject)
  })
}
