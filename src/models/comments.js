const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comments: [
      {
        content: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;
