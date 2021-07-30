import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../controllers/categoriesController.js";
import express from "express";

const router = express.Router();

// GET CATEGORIES
router.route("/").get(getCategories);

// CREATE A CATEGORY
router.route("/").post(createCategory);

// DELETE A CATEGORY
router.route("/:id").delete(deleteCategory);

export default router;
