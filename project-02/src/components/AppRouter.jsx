import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Error } from './../pages/Error';
import { About } from './../pages/About';
import { Posts } from './../pages/Posts';
import { PostIdPage } from './../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/posts/:id">
        <PostIdPage />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
};

export { AppRouter };
