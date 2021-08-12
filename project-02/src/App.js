import React from "react";
import Post from "./components/Post";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Post post={{ id: 1, title: "Javascript", body: "My new post" }} />
      <Post post={{ id: 2, title: "PHP", body: "My new post" }} />
      <Post post={{ id: 3, title: "Rust", body: "My new post" }} />
      <Post post={{ id: 4, title: "Kotlin", body: "My new post" }} />
    </div>
  );
}

export default App;
