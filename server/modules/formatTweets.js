module.exports = (data) => {
  let res = []

  for (var i = 0; i < data["results"].length; i++) {
    let tweetText;
    console.log(tweetText["results"].length)
    if (data["results"][i]["extended_tweet"] == undefined) {
      tweetText = data["results"][i]["text"];
      tweetText = tweetText.replace(/&amp;/g, '&');
      if (tweetText.includes("https://t.co")) {
        tweetText = tweetText.substring(0,tweetText.length-24)
      }

      res.push({
        text: tweetText
      })

    }
    else if (data["results"][i]["extended_tweet"] != undefined) {
      tweetText = data["results"][i]["extended_tweet"]["full_text"];
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
