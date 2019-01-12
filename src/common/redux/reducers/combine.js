import { combineReducers } from 'redux';

import configReducer from './config-reducer';
import homeReducer from './home-reducer';
import categoryReducer from './category-reducer';
import articleReducer from './article-reducer';

const reducers = combineReducers({
  config: configReducer,
  home: homeReducer,
  category: categoryReducer,
  article: articleReducer,
});

export default reducers;
