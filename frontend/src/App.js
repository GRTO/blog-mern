/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";
import Theme from "./styles/theme";
import NewPost from "./pages/NewPost.js";
import "./App.css";
import BlogView from "./pages/BlogView.js";
import { Layout } from "./layout/Layout";
import { ADMIN_URL } from "./constants/contants";
import { useCategories } from "./hooks/useCategories.js";
import { useEffect } from "react";
import { CategoriesContextProvider } from "./context/categories/Context";

const PageView = () => {
  const { getCategories } = useCategories();

  useEffect(() => {
    async function fetchCategories() {
      await getCategories();
    }

    fetchCategories();
  }, []);

  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <BlogView />
          </Route>
          <Route exact path={`/${ADMIN_URL}/createPost`}>
            <NewPost />
          </Route>
          <Route exact path={`/${ADMIN_URL}`}>
            <BlogView />
          </Route>
          <Route exact path={`/${ADMIN_URL}/:category/:postTitle`}>
            <NewPost />
          </Route>
          <Route exact path="/:category/:postTitle">
            <NewPost />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

const App = () => (
  <Theme>
    <CategoriesContextProvider>
      <PageView />
    </CategoriesContextProvider>
  </Theme>
);

export default App;
