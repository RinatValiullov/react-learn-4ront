import React from 'react';
import { Input } from './../components/UI/input/Input';
import { Button } from './../components/UI/button/Button';

const Login = () => {
  return (
    <div>
      <h1>Авторизоваться</h1>
      <form>
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export { Login };
