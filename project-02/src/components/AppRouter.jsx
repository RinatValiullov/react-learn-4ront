import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { privateRoutes, publicRoutes } from './../router';
import { AuthContext } from './../context/index';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    isAuth
      ? <Switch>
        {
          privateRoutes.map(route => {
            return <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />;
          })
        }
        <Redirect to="/posts" />
      </Switch>
      : <Switch>
        {
          publicRoutes.map(route => {
            return <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />;
          })
        }
        <Redirect to="/login" />
      </Switch>

  );
};

export { AppRouter };
