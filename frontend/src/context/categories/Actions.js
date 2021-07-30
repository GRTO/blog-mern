export const GET_CATEGORIES_START = "GET_CATEGORIES_START";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const GetCategoriesStart = () => ({
  type: GET_CATEGORIES_START,
});

export const GetCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const GetCategoriesFailure = () => ({
  type: GET_CATEGORIES_FAILURE,
});
