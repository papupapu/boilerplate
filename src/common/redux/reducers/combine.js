import { combineReducers } from 'redux';

import configReducer from './config-reducer';
import appReducer from './app-reducer';
import notcoolReducer from './notcool-reducer';

const reducers = combineReducers({
  config: configReducer,
  app: appReducer,
  notcool: notcoolReducer,
});

export default reducers;
