module.exports = (data) => {
  let res = []

  for (var i = 0; i < data.length; i++) {
    let tweetText;
    console.log(tweetText["results"].length)
    if (data[i]["extended_tweet"] == undefined) {
      tweetText = data[i]["text"];
      tweetText = tweetText.replace(/&amp;/g, '&');
      if (tweetText.includes("https://t.co")) {
        tweetText = tweetText.substring(0,tweetText.length-24)
      }

      res.push({
        text: tweetText
      })

    }
    else if (data[i]["extended_tweet"] != undefined) {
      tweetText = data[i]["extended_tweet"]["full_text"];
      tweetText = tweetText.replace(/&amp;/g, '&');
      if (tweetText.includes("https://t.co")) {
        tweetText = tweetText.substring(0,tweetText.length-24)
      }

      res.push({
        text: tweetText
      })
    }
  }

  return res
}
