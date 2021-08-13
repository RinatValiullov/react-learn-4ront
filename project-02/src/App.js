import React, { useState } from "react";
// import Post from "./components/Post";
import PostList from "./components/PostList";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "My new post" },
    { id: 2, title: "PHP", body: "My new post" },
    { id: 3, title: "Python", body: "My new post" },
    { id: 4, title: "Haskell", body: "My new post" },
    { id: 5, title: "Kotlin", body: "My new post" }
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Javascript", body: "My new post 2" },
    { id: 2, title: "PHP", body: "My new post 2" },
    { id: 3, title: "Python", body: "My new post 2" },
    { id: 4, title: "Haskell", body: "My new post 2" },
    { id: 5, title: "Kotlin", body: "My new post 2" }
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов 1" />
      <PostList posts={posts2} title="Список постов 2" />
    </div>
  );
};

export default App;
