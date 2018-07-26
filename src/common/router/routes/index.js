import App from '../../containers/App';
import NotCool from '../../components/app/NotCool';

import appFetchParams from '../fetchParams/app';

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
      fetchParams: appFetchParams,
      pageTemplate: 'fullpage',
    },
  ],
};
