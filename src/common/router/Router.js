import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routeOptions from './routes';

const routes = routeOptions.routes.map(
  (
    {
      path,
      component,
      exact,
    },
  ) => <Route key={`${Math.random()}ROUTE_`} exact={exact} path={path} component={component} />,
);

const AppRouter = () => (
  <Switch>
    {routes}
  </Switch>
);

export default AppRouter;
