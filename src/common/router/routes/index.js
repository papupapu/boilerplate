import App from '../../containers/App';
import NotCool from '../../containers/NotCool';

import appFetchParams from '../fetchParams/app';
import notcoolFetchParams from '../fetchParams/notcool';

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
      path: '/notcool',
      exact: true,
      component: NotCool,
      fetchParams: notcoolFetchParams,
      pageTemplate: 'fullpage',
    },
  ],
};
