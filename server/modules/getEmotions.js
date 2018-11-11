const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
const config = require('../config/config.json').watson

const toneAnalyzer = new ToneAnalyzerV3(config)

const CHUNKSIZE = 100

module.exports = (data) => {
  const chunkedData = []

  for (const entry of data) {
    for (const sent of entry.sentences) {
      chunkedData.push({
        sentence: sent,
        geo: entry.geo
      })
    }
  }

  let res = []

  for (let i = 0; i < ~~(chunkedData.length / CHUNKSIZE); i++) {
    const chunk = chunkedData.split(i, i + CHUNKSIZE)

    const reqString = ''

    for (const entry of chunk) {
      reqString += ' ' + entry.sentence
    }

    const params = {
      tone_input: { text: reqString },
      content_type: 'application/json'
    }

    toneAnalyzer.tone(params, (err, res) => {
      if (err) throw err

      console.log(res)


    })
  }
}
