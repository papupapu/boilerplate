import express from 'express';
import Request from 'axios';

import CategoryListingModel from './models/category';

const fetchCategoryData = req => new Promise(
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
        console.log('---');
        console.log('Error in fetchCategoryData - /server/proxy/category.js');
        console.log('error:');
        console.log(e);
        console.log('response:');
        console.log(e.response);
        console.log('---');
        const result = Object.assign({}, { error: true });
        return resolve({ result });
      });
  },
);

const router = express.Router();
router.route('/').post((req, res) => {
  async function getCategoryData() {
    const APIResponse = await fetchCategoryData(req);
    if (APIResponse.result.error) {
      res.status(200).send('noooooo').end();
    } else {
      const response = new CategoryListingModel(
        APIResponse.result.articles,
      );
      res.status(200).send(Object.assign({}, response)).end();
    }
  }
  getCategoryData();
});

export default router;
