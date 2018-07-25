import { createStore, applyMiddleware, compose } from 'redux';

import middleware from './middleware';
import reducers from './reducers/combine';

let preloadedState = {};
if (typeof window !== 'undefined' && window.__PRELOADEDSTATE__) {
  preloadedState = window.__PRELOADEDSTATE__;
  delete window.__PRELOADEDSTATE__;
}

const composeEnhancers = (typeof window !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
