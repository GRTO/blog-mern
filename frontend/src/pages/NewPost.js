import { useEffect, useState } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { PostEditor } from "../components/PostEditor/PostEditor";
import { PostPreview } from "../components/PostPreview/PostPreview";
import { ADMIN_URL } from "../constants/contants.js";
import { useCategories } from "../hooks/useCategories.js";
import { apiPosts } from "../services/api";
import { isAdminURL, undecodeURL } from "../utils/url";

export const NewPost = () => {
  const history = useHistory();

  const { pathname } = useLocation();

  const { categoriesParsed } = useCategories();

  const [isAdmin, setIsAdmin] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [creationTime, setCreationTime] = useState("");
  const [postId, setPostId] = useState();

  const redirectHome = () => {
    history.push(isAdmin ? `/${ADMIN_URL}` : "/");
  };

  useEffect(() => {
    setIsAdmin(isAdminURL(pathname));
    const { category, title } = undecodeURL(pathname);

    async function getPost() {
      const posts = await apiPosts.getAll({ category, title });

      const [post] = posts;

      if (post) {
        const {
          _id,
          title: titlePost,
          description: descPost,
          categories,
          creationTime: creationTimePost,
        } = post;

        const [category] = categories;

        setTitle(titlePost);
        setDescription(descPost);
        setCategory(category);
        setCreationTime(creationTimePost);
        setPostId(_id);
      }
    }

    getPost();
  }, [pathname]);

  const handleOnSubmit = async (formData) => {
    const { title, description, category, creationTime } = formData;

    if (title && description && category && creationTime) {
      try {
        const postModel = {
          title,
          description,
          categories: [category],
          creationTime,
        };

        if (postId) {
          // Update post
          await apiPosts.put(postModel, postId);
        } else {
          // Create a new post
          await apiPosts.post(postModel);
        }

        redirectHome();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {isAdmin ? (
        <PostEditor
          id={postId}
          title={title}
          description={description}
          creationTime={creationTime}
          category={category}
          categories={categoriesParsed()}
          onSubmit={handleOnSubmit}
        />
      ) : (
        <>
          {postId && title && description && category && creationTime ? (
            <PostPreview
              id={postId}
              title={title}
              description={description}
              creationTime={creationTime}
              category={category}
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default withRouter(NewPost);
