module.exports = (data) => {
  let res = []

  for (var i = 0; i < data.length; i++) {
    let tweetText;

    if (data[i]["place"] == null) continue

    let city = data[i]["place"]["full_name"]

    if (data[i]["extended_tweet"] == undefined) {
      tweetText = data[i]["text"];
      tweetText = tweetText.replace(/&amp;/g, '&');
      if (tweetText.includes("https://t.co")) {
        tweetText = tweetText.substring(0,tweetText.length-24)
      }

      res.push({
        text: tweetText,
        city: city
      })

    }
    else if (data[i]["extended_tweet"] != undefined) {
      tweetText = data[i]["extended_tweet"]["full_text"];
      tweetText = tweetText.replace(/&amp;/g, '&');
      if (tweetText.includes("https://t.co")) {
        tweetText = tweetText.substring(0,tweetText.length-24)
      }

      res.push({
        text: tweetText,
        city: city
      })
    }
  }

  return res
}
