import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { routes } from './../router';

const AppRouter = () => {
  return (
    <Switch>
      {
        routes.map(route => {
          return <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
          />;
        })
      }
      <Redirect to="/posts/" />
    </Switch>
  );
};

export { AppRouter };
