const axios = require('axios')
const auth = require('../config/config.json')
const getLocations = require('../modules/getLocations.js')
const getTweetData = require('../modules/getTweetData.js')

exports.default = (req, res) => {
  let hashtag = req.query.hashtag;

  const api = axios.create({
    baseURL: 'https://api.twitter.com/1.1',
    headers: {
      Authorization: auth.bearer
    },
    withCredentials: true
  })
  let url = "/search/tweets.json?q=%23" + hashtag
  api.get(url)
    .then(resp => {
      getLocations(resp)
      getTweetData(resp)
    })
    /*
    {
      "sentences": [],
      "geo: ""
    }
    */
}
