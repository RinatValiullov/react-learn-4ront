import React, { useState, useEffect } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { Button } from "./components/UI/button/Button";
import { Modal } from "./components/UI/modal/Modal";
import "./styles/App.css";
import { usePosts } from "./hooks/usePosts";
import { PostService } from "./API/PostService";
import { Loader } from "./components/UI/Loader/Loader";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPostst = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const fetchPosts = async () => {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Button style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPostst}
          title="Список постов"
        />
      )}
    </div>
  );
};

export default App;
