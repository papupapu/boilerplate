import express from 'express';
import Request from 'axios';

import ArticleModel from './models/article';

import { log } from '../../common/helpers';

const fetchArticleData = req => new Promise(
  (resolve) => {
    Request.defaults.headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
    };
    Request.get(`http://localhost:8888${req.body.categoryUri}.json`)
      .then((response) => {
        const result = Object.assign({}, { error: false }, response.data);
        return resolve({ result });
      })
      .catch((e) => {
        log('---');
        log('Error in fetchArticleData - /server/proxy/category.js');
        log('error:');
        log(e);
        log('response:');
        log(e.response);
        log('---');
        const result = Object.assign({}, { error: true });
        return resolve({ result });
      });
  },
);

const router = express.Router();
router.route('/').post((req, res) => {
  async function getArticleData() {
    const APIResponse = await fetchArticleData(req);
    if (APIResponse.result.error) {
      res.status(200).send('noooooo').end();
    } else {
      const result = new ArticleModel(
        APIResponse.result.articles.filter(item => item.id === req.body.id)[0],
      );
      res.status(200).send(Object.assign({}, { result })).end();
    }
  }
  getArticleData();
});

export default router;
