const axios = require('axios')
const auth = require('../config/config.json').twitter

exports.default = (req, res) => {
  let hashtag = req.query.hashtag;

  const api = axios.create({
    baseURL: 'https://api.twitter.com/1.1',
    headers: {
      Authorization: auth.bearer
    },
    withCredentials: true
  })

}
