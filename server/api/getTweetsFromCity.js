const getTweets = require('../modules/getTweets.js')
const getEmotions = require('../modules/getEmotions.js')

function die (res) {
  res.status(400)
  res.end('Invalid parameters')
}

module.exports = async (req, res) => {
  const required = ['city', 'keyword']

  for (const field of required) {
    if (!(field in req.query)) die(res)
  }

  const city = req.query.city
  const keyword = req.query.keyword

  const tweets = await getTweets(keyword, city)
  res.status(200)
  res.json(getEmotions(tweets))
}