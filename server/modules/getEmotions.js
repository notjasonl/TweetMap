const Sentiment = require('sentiment')
const sentiment = new Sentiment()

module.exports = (data) => {
  for (const tweet of data) {
    tweet.sentiment = sentiment.analyze(tweet.text)
  }

  return data
}
