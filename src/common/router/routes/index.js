import App from '../../components/app/App';
import NotCool from '../../components/app/NotCool';

export default {
  routes: [
    {
      path: '/',
      exact: true,
      component: App,
      pageTemplate: '',
    },
    {
      path: '/notcool',
      exact: true,
      component: NotCool,
      pageTemplate: 'fullpage',
    },
  ],
};
