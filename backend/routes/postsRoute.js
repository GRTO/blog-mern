import {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";
import express from "express";

const router = express.Router();

// GET POSTS
router.route("/").get(getPosts);

// GET A SPECIFIC POST
router.route("/:id").get(getPost);

// CREATE A POST
router.route("/").post(createPost);

// UPDATE POST
router.route("/:id").put(updatePost);

// DELETE POST
router.route("/:id").delete(deletePost);

export default router;
