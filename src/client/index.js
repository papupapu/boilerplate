
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../common/redux/store';
import AppRouter from '../common/router/Router';

hydrate(
  (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
);
