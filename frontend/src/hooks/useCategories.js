import { useContext } from "react";
import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
} from "../context/categories/Actions.js";
import { CategoriesContext } from "../context/categories/Context";
import { apiCategories } from "../services/api/index.js";

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (context === undefined) {
    throw new Error(
      "CategoriesContext should not be used outside useCategories custom hook"
    );
  }

  const { state, dispatch } = context;

  const getCategories = async () => {
    dispatch({ type: GET_CATEGORIES_START });
    try {
      const categories = await apiCategories.getAll();

      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_FAILURE });
    }
  };

  const categoriesParsed = () => {
    return (state.categories || []).map((category) => ({
      value: category.name,
      label: category.name,
    }));
  };

  return {
    getCategories,
    categories: state.categories,
    categoriesParsed,
  };
};
