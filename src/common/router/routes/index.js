import Home from '../../containers/Home';
import Category from '../../containers/Category';
import Article from '../../containers/Article';

import homeFetchParams from '../fetchParams/home';
import categoryFetchParams from '../fetchParams/category';
import articleFetchParams from '../fetchParams/article';

export default {
  routes: [
    {
      path: '/',
      exact: true,
      component: Home,
      fetchParams: homeFetchParams,
      pageTemplate: 'listing',
    },
    {
      path: '/:category',
      exact: true,
      component: Category,
      fetchParams: categoryFetchParams,
      pageTemplate: 'listing',
    },
    {
      path: '/:category/:id',
      exact: true,
      component: Article,
      fetchParams: articleFetchParams,
      pageTemplate: 'detail',
    },
  ],
};
