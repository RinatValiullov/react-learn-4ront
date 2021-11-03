import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.css";
import { About } from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/about">
        <About />
      </Route>
    </BrowserRouter>
  );
};

export default App;
