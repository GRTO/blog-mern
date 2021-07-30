const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return {
        categories: null,
        isFetching: true,
        error: false,
      };
    case "GET_CATEGORIES_SUCCESS":
      return {
        categories: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_CATEGORIES_FAILURE":
      return {
        categories: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
