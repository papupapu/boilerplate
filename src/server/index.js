import express from 'express';

import React from 'react';
import ReactDom from 'react-dom/server';
import Helmet from 'react-helmet';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter as Router, matchPath } from 'react-router-dom';

import routeOptions from '../common/router/routes';
import reducers from '../common/redux/reducers/combine';
import thunk from '../common/redux/middleware/thunk';

import render from './render/index';

import AppRouter from '../common/router/Router';

const app = express();
app.use('/assets', express.static('./assets'));
app.use('/build', express.static('./build'));

app.get(
  '*',
  async (req, res) => {
    try {
      const store = createStore(reducers, {}, applyMiddleware(thunk));

      let foundPath = null;
      let { component } = routeOptions.routes.find(
        ({ path, exact }) => {
          foundPath = matchPath(
            req.url,
            {
              path,
              exact,
              strict: false,
            },
          );
          return foundPath;
        },
      ) || {};

      if (!component) {
        component = {};
      }

      if (!component.fetchData) {
        component.fetchData = () => new Promise(resolve => resolve());
      }

      await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });

      const preloadedState = store.getState();

      const context = {};
      const html = ReactDom.renderToString(
        <Provider store={store}>
          <Router context={context} location={req.url}>
            <AppRouter />
          </Router>
        </Provider>,
      );
      const helmetData = Helmet.renderStatic();

      if (context.url) {
        res.redirect(context.status, `http://${req.headers.host}${context.url}`);
      } else if (foundPath && foundPath.path === '/404') {
        res.status(404).send(render(html, preloadedState, helmetData));
      } else {
        res.send(render(html, preloadedState, helmetData));
      }
    } catch (err) {
      res.status(400).send(render('error!!!', {}, {}));
    }
  },
);

const port = process.env.PORT || 9000;
app.listen(
  port,
  () => {
    console.log(`server started on port: ${port}`);
  },
);
