import React, { useState } from "react";

function App() {
  let initialState = 0;
  const [likes, setLikes] = useState(initialState);
  const [value, setVlaue] = useState("Hello, React!");

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <div>{likes}</div>
      <div>{value}</div>
      <input
        type="text"
        value={value}
        onChange={(event) => setVlaue(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
