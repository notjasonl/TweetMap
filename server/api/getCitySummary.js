const getTweets = require('../modules/getTweets.js')
const getEmotions = require('../modules/getEmotions.js')

function die (res) {
  res.status(400)
  res.end('Invalid parameters')
}

function avg (data) {
  let sum = 0

  for (const entry of data) {
    sum += entry.sentiment.score
  }

  return sum / data.length
}

module.exports = async (req, res) => {
  const required = ['city', 'keyword']

  for (const field of required) {
    if (!(field in req.query)) die(res)
  }

  const city = req.query.city
  const keyword = req.query.keyword

  let tweets = await getTweets(keyword, city)
  tweets = getEmotions(tweets)

  res.status(200)
  res.json({
    count: tweets.length,
    sentiment: avg(tweets)
  })
}