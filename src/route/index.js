import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store';
import routes from './routes';
import { Global as middlewares } from './middleware';

Vue.use(Router);

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes // short for routes: routes
});

middlewares(router);

export default router;
