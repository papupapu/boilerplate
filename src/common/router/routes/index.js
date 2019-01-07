import App from '../../containers/App';
import Category from '../../containers/Category';

import appFetchParams from '../fetchParams/app';
import categoryFetchParams from '../fetchParams/category';

export default {
  routes: [
    {
      path: '/',
      exact: true,
      component: App,
      fetchParams: appFetchParams,
      pageTemplate: '',
    },
    {
      path: '/:category',
      exact: true,
      component: Category,
      fetchParams: categoryFetchParams,
      pageTemplate: '',
    },
  ],
};
