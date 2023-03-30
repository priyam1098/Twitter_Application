const express = require("express");
const connect = require("../src/config/database");
const app = express();
const comment = require("../src/models/comments");
const TweetRepository = require("./repository/tweet-repository");

app.listen(3000, async () => {
  console.log("Server started 3000");
  await connect();
  console.log("Mongo db connected");
  //await comment.create({ comments: [{ content: "First tweet" }] });
  const tweetobj = new TweetRepository();
  // const tweet = await tweetobj.createTweet({
  //   content: "New tweet by me",
  //   userEmail: "Pri@7834gmail.com",
  // });
  //console.log(tweet);
  // const tweet = await Tweet.create({
  //   content: "First tweet",
  //   userEmail: "a@b.com",
  // });
  // const getTweet = await tweetobj.getTweet("63e89f02b191c072c77c7569");
  // console.log(getTweet);
});
