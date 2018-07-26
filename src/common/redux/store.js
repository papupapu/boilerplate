import { createStore, applyMiddleware, compose } from 'redux';

import middleware from './middleware';
import reducers from './reducers/combine';

let preloadedState = {};

if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
  preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
}

const composeEnhancers = (typeof window !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
