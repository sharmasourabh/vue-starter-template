import Home from './../components/home.vue';
import AboutUs from './../components/aboutus.vue';
import Login from './../components/login.vue';
import HomeContent from './../components/homecontent.vue';

export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: HomeContent,
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
