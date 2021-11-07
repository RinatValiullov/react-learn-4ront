import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context/index";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
