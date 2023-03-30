const Tweet = require("../models/tweet");

class TweetRepository {
  async createTweet(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
      console.log("Something went wrong at repo layer create tweet");
    }
  }
  async getTweet(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId);
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repo layer");
    }
  }
  async updateTweet(tweetId, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(tweetId, data);
      return tweet;
    } catch (error) {
      console.log("Something went wrong at repo layer");
    }
  }
  async destroyTweet(tweetId) {
    try {
      const tweet = await Tweet.findByIdRemove(tweetId);
      return true;
    } catch (error) {
      console.log("Something went wrong at repo layer");
    }
  }
}
module.exports = TweetRepository;
