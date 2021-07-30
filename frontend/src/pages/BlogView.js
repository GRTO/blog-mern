/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { Modal } from "../components/Modal/Modal.jsx";
import { Post } from "../components/Post/Post.jsx";
import { ADMIN_URL } from "../constants/contants.js";
import { apiPosts } from "../services/api/index.js";
import Button from "../styles/GlobalComponents/Button.jsx";
import { Header } from "../styles/GlobalComponents/Header.jsx";
import { isAdminURL, postUrlParser } from "../utils/url.js";

function BlogView() {
  const history = useHistory();

  const { pathname } = useLocation();

  const [isAdmin, setIsAdmin] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [posts, setPosts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postDelete, setPostDelete] = useState();

  useEffect(() => {
    setIsAdmin(isAdminURL(pathname));

    async function fetchPosts() {
      const posts = await apiPosts.getAll({ sortByCreationTime: "DESC" });

      setPosts(posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  const redirectPost = (post) => {
    const { categories } = post;
    // Get first category
    const [category] = categories;

    if (category) {
      const postElement = { ...post, category };

      const urlPost = postUrlParser(postElement, ["category", "title"]);

      history.push(isAdmin ? `/${ADMIN_URL}/${urlPost}` : urlPost);
    }
  };

  const handleDeletion = async (post) => {
    try {
      await apiPosts.remove(post._id);
      setShowDeleteModal(false);

      // Reload the page after deleting the post
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const redirectNewPost = () => {
    history.push(`/${ADMIN_URL}/createPost`);
  };

  return (
    <main>
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onSubmit={() => handleDeletion(postDelete)}
      >
        Are you sure you want to delete the current Post with title{" "}
        {postDelete?.title}?
      </Modal>
      <Header>
        <h1>{isAdmin ? "The Admin View" : "My blog"}</h1>
        {isAdmin && (
          <Button typeButton="secondary" form onClick={redirectNewPost}>
            Write a story
          </Button>
        )}
      </Header>
      <section>
        {isFetching ? (
          "Fetching posts..."
        ) : (
          <>
            <h2>Loaded {posts.length} posts.</h2>
            {posts.map((post) => (
              <Post
                key={post._id}
                post={post}
                onClick={() => redirectPost(post)}
                showActions={isAdmin}
                onDelete={() => {
                  setPostDelete(post);
                  setShowDeleteModal(true);
                }}
              />
            ))}
          </>
        )}
      </section>
    </main>
  );
}

export default withRouter(BlogView);
