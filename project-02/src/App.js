import React, { useState, useEffect } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { Button } from "./components/UI/button/Button";
import { Modal } from "./components/UI/modal/Modal";
import "./styles/App.css";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Frontend" },
    { id: 2, title: "PHP", body: "Backend" },
    { id: 3, title: "Python", body: "Data Science" },
    { id: 4, title: "Haskell", body: "Functional programming" },
    { id: 5, title: "Kotlin", body: "Backend" }
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPostst = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
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
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPostst}
        title="Список постов"
      />
    </div>
  );
};

export default App;
