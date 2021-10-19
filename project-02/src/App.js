import React, { useState } from "react";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
// import Button from "./components/UI/button/Button";
// import Input from "./components/UI/input/Input";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "My new post" },
    { id: 2, title: "PHP", body: "My new post" },
    { id: 3, title: "Python", body: "My new post" },
    { id: 4, title: "Haskell", body: "My new post" },
    { id: 5, title: "Kotlin", body: "My new post" }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Список постов 1" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Посты не найдены!</h2>
      )}
    </div>
  );
};

export default App;
