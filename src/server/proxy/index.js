import bodyParser from 'body-parser';
import express from 'express';

import home from './home';
import category from './category';
import article from './article';

const api = express();

api.use(bodyParser.json());

api.use('/home', home);
api.use('/category', category);
api.use('/article', article);

export default api;
