import express from 'express';
import Request from 'axios';

import HomeListingModel from './models/home';

import { log } from '../../common/helpers';

const fetchHomeData = req => new Promise(
  (resolve) => {
    Request.defaults.headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate',
    };
    Request.get(`http://localhost:8888${req.body.uri}.json`)
      .then((response) => {
        const result = Object.assign({}, { error: false }, response.data);
        return resolve({ result });
      })
      .catch((e) => {
        log('---');
        log('Error in fetchHomeData - /server/proxy/category.js');
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
  async function getHomeData() {
    const APIResponse = await fetchHomeData(req);
    if (APIResponse.result.error) {
      res.status(200).send('noooooo').end();
    } else {
      const response = new HomeListingModel(
        APIResponse.result.articles,
      );
      res.status(200).send(Object.assign({}, response)).end();
    }
  }
  getHomeData();
});

export default router;
