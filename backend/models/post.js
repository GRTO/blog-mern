import moongose from "mongoose";

const PostSchema = new moongose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    creationTime: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Post = moongose.model("Post", PostSchema);

export default Post;
