import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
  <Router>
    <Switch>
      {routes}
    </Switch>
  </Router>
);

export default AppRouter;
