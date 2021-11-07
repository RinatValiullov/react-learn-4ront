import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context/index";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

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
