import Home from './../views/home.vue';
import AboutUs from './../views/aboutus.vue';
import Login from './../views/login.vue';
import HomeContent from './../views/homecontent.vue';

import { Auth } from './middleware';

export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: HomeContent,
        // beforeEnter: Auth
      },
      {
        path: 'aboutus',
        component: AboutUs
      },
      {
        path: 'login',
        component: Login
      }
    ]
  }
];
