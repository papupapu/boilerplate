import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routeOptions from './routes';

const routes = routeOptions.routes.map(
  (
    {
      path,
      exact,
      component,
    },
  ) => (
    <Route
      key={`${Math.random()}ROUTE_`}
      path={path}
      exact={exact}
      component={component}
    />
  ),
);

const AppRouter = () => (
  <Switch>
    {routes}
  </Switch>
);

export default AppRouter;
