import App from '../../components/app/App';
import NotCool from '../../components/app/NotCool';

export default {
  routes: [
    {
      path: '/',
      component: App,
      exact: true,
    },
    {
      path: '/notcool',
      component: NotCool,
      exact: true,
    },
  ],
};
