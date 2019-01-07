import { combineReducers } from 'redux';

import configReducer from './config-reducer';
import appReducer from './app-reducer';
import categoryReducer from './category-reducer';

const reducers = combineReducers({
  config: configReducer,
  app: appReducer,
  category: categoryReducer,
});

export default reducers;
