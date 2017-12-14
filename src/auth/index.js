import axios from 'axios';
import router from '../route';

// URL and endpoint constants
const API_URL = 'http://localhost:3000/';
const LOGIN_URL = `${API_URL}auth/token`;
const SIGNUP_URL = `${API_URL}users/`;

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    axios.post(LOGIN_URL, creds).then((response) => {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('auth_user', response.data.userId);
      localStorage.setItem('auth_id', response.data.id);
      this.user.authenticated = true;
      context.isloading = false;
      // Redirect to a specified route
      context.$store.dispatch('login');
      if (redirect) {
        router.go(redirect);
      } else {
        router.push('/');
      }
    }).catch((error) => {
      context.isloading = false;
      if (error.response) {
        context.error = error.response.data;
      }
    });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then((response) => {
      localStorage.setItem('auth_token', response.data.token);
      localStorage.setItem('auth_user', response.data.userId);
      localStorage.setItem('auth_id', response.data.id);

      this.user.authenticated = true;

      if (redirect) {
        router.go(redirect);
      }
    }).catch((error) => {
      context.error = error.response.data;
    });
  },

  // To log out, we just need to remove the token
  logout(context) {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_id');
    this.user.authenticated = false;
    context.$store.dispatch('logout');
    router.push('/login');
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return `Bearer ${localStorage.getItem('auth_token')}`;
  }
};
