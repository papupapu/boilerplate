import bodyParser from 'body-parser';
import express from 'express';

import category from './category';

const api = express();

api.use(bodyParser.json());

api.use('/category', category);

export default api;
