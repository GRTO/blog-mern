import asyncHandler from "express-async-handler";
import Post from "../models/post.js";

// GET POSTS
const getPosts = asyncHandler(async (request, response) => {
  const category = request.query.category;
  const title = request.query.title;
  const sortByCreationTime = request.query.sortByCreationTime;

  try {
    const query = {};

    if (title && category) {
      query["$and"] = [
        {
          categories: {
            $in: [category],
          },
        },
        { title },
      ];
    } else if (title) {
      query["title"] = title;
    } else if (category) {
      query["categories"] = {
        $in: [category],
      };
    }

    const posts = await Post.find(query)
      .sort({ creationTime: sortByCreationTime })
      .exec();

    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
});

// GET A SPECIFIC POST
const getPost = asyncHandler(async (request, response) => {
  try {
    const postId = request.params.id;

    const post = await Post.findById(postId);

    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
});

// CREATE POST
const createPost = asyncHandler(async (request, response) => {
  const newPost = new Post(request.body);

  try {
    const savedPost = await newPost.save();

    response.status(201).json(savedPost);
  } catch (error) {
    response.status(500).json(error);
  }
});

// UPDATE POST
const updatePost = asyncHandler(async (request, response) => {
  const postId = request.params.id;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $set: request.body },
      { new: true }
    );

    response.status(201).json(updatedPost);
  } catch (error) {
    response.status(500).json(error);
  }
});

// DELETE POST
const deletePost = asyncHandler(async (request, response) => {
  const post = await Post.findById(request.params.id);

  try {
    await post.delete();

    response.status(200).json({ message: "The post has been deleted" });
  } catch (error) {
    response.status(500).json(error);
  }
});

export { getPosts, getPost, createPost, updatePost, deletePost };
