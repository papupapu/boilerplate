import { combineReducers } from 'redux';

import appReducer from './app-reducer';
import notcoolReducer from './notcool-reducer';

const reducers = combineReducers({
  app: appReducer,
  notcool: notcoolReducer,
});

export default reducers;
