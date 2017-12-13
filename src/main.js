import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import store from './store/store';
import router from './route/index';
import App from './app.vue';
import './vendor';
import auth from './auth';

sync(store, router);

auth.checkAuth();
axios.defaults.headers.common['Authorization'] = auth.getAuthHeader();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
