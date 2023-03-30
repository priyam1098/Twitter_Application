const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
  },
  { timestamps: true } //for createdAt, updatedAt
);

//after define schema create model
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
