import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context';
import { Button } from './../button/Button';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <Button onClick={logout}>
        Выйти
      </Button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export { Navbar };
