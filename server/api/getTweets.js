const axios = require('axios')
<<<<<<< HEAD
const auth = require('../config/config.json')
const getLocations = require('../modules/getLocations.js')
=======
const auth = require('../config/config.json').twitter
>>>>>>> 0518401ee88c8457920263387ca453165edb4615

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
