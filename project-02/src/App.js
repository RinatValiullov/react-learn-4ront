import React, { useState } from "react";
// import Post from "./components/Post";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "My new post" },
    { id: 2, title: "PHP", body: "My new post" },
    { id: 3, title: "Python", body: "My new post" },
    { id: 4, title: "Haskell", body: "My new post" },
    { id: 5, title: "Kotlin", body: "My new post" }
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <form>
        <Input
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          type="text"
          placeholder="Name of post"
        />
        <Input
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
          type="text"
          placeholder="Description of post"
        />
        <Button onClick={addNewPost}>Create post</Button>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
};

export default App;
