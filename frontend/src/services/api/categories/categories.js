import { ApiCore } from "../utilities/core";

// CATEGORY API
const url = "/api/categories";

const apiCatergories = new ApiCore({
  getAll: true,
  getSingle: false,
  post: true,
  put: false,
  remove: true,
  url,
});

export default apiCatergories;
