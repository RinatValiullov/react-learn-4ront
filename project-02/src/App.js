import React, { useState } from "react";
import { PostForm } from "./components/PostForm";
import PostList from "./components/PostList";
// import Button from "./components/UI/button/Button";
import "./styles/App.css";
import Input from "./components/UI/input/Input";
import MySelect from "./components/UI/select/MySelect";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Frontend" },
    { id: 2, title: "PHP", body: "Backend" },
    { id: 3, title: "Python", body: "Data Science" },
    { id: 4, title: "Haskell", body: "Functional programming" },
    { id: 5, title: "Kotlin", body: "Backend" }
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getSortedPosts = () => {
    console.log("Function works");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  };

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultOption="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" }
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Список постов 1"
        />
      ) : (
        <h2 style={{ textAlign: "center" }}>Посты не найдены!</h2>
      )}
    </div>
  );
};

export default App;
