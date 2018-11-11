const axios = require('axios')
const auth = require('../config/config.json')
const formatTweets = require('../modules/formatTweets.js')
const testData = require('../sample.json')

module.exports = (req, res) => {

  const hashtag = req.query.hashtag;
  const city = req.query.city;

  // const api = axios.create({
  //   headers: {
  //     Authorization: auth["twitter-bearer"]
  //   },
  //   withCredentials: true
  // })
  // const url = "https://api.twitter.com/1.1/search/30day/dev1.json?query=%23" + hashtag + " lang%3Aen place%3A" + city;
  // console.log(url)

  axios({
    method: 'get',
    baseURL: 'https://api.twitter.com/1.1/search/30day/dev1.json',
    params: {
      query: `%23${hashtag} lang%3Aen place%3A${city}`
    },
    headers: {
      Authorization: auth["twitter-bearer"]
    },
    withCredentials: true

  })
    .then(resp => {
      const data = formatTweets(resp.data)

      res.status(200)
      res.json(data)
    })
    .catch(err => {
      console.error(err);
    })


}
