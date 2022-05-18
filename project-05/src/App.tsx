import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
