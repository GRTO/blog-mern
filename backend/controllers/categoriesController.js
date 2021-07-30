import asyncHandler from "express-async-handler";
import Category from "../models/category.js";

// GET CATEGORIES
const getCategories = asyncHandler(async (request, response) => {
  try {
    const categories = await Category.find();

    response.status(200).json(categories);
  } catch (error) {
    response.status(500).json(error);
  }
});

// CREATE CATEGORY
const createCategory = asyncHandler(async (request, response) => {
  const newCategory = new Category(request.body);

  try {
    const savedCategory = await newCategory.save();

    response.status(200).json(savedCategory);
  } catch (error) {
    response.status(500).json(error);
  }
});

// DELETE CATEGORY
const deleteCategory = asyncHandler(async (request, response) => {
  const category = await Category.findById(request.params.id);

  try {
    await category.delete();

    response.status(200).json({ message: "The category has been deleted" });
  } catch (error) {
    response.status(500).json(error);
  }
});

export { getCategories, createCategory, deleteCategory };
