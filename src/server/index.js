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

import api from './proxy';
import render from './render/index';

import AppRouter from '../common/router/Router';

import { getCurrentCategory } from '../common/helpers';

const app = express();
app.use('/assets', express.static('./assets'));
app.use('/build', express.static('./build'));
app.use('/api', api);

app.get(
  '*',
  async (req, res) => {
    try {
      const store = createStore(reducers, {}, applyMiddleware(thunk));

      let foundPath = null;
      let { component, fetchParams } = routeOptions.routes.find(
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
        fetchParams = {};
      }
      if (!component.fetchData) {
        component.fetchData = () => new Promise(resolve => resolve());
      }

      const confCategories = store.getState().config.categories;
      const current = getCurrentCategory(confCategories, req.url);
      const params = await fetchParams({
        path: current.path,
        title: current.title,
        slug: current.slug,
      });
      await component.fetchData({ store, params });
      const preloadedState = store.getState();

      const context = {};
      const html = ReactDom.renderToString(
        <Provider store={store}>
          <Router context={context} location={req.url}>
            <AppRouter />
          </Router>
        </Provider>,
      );

      const helmetData = Helmet.rewind();

      if (context.url) {
        res.redirect(context.status, `http://${req.headers.host}${context.url}`);
      } else if (foundPath && foundPath.path === '/404') {
        res.status(404).send(render(html, preloadedState, helmetData));
      } else {
        res.send(render(html, preloadedState, helmetData));
      }
    } catch (err) {
      console.log('');
      console.log('err');
      console.log(err);
      console.log('');
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
