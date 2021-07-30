import { ApiCore } from "../utilities/core";

// POST API
const url = "/api/posts";

const apiPosts = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: true,
  remove: true,
  url,
});

export default apiPosts;
