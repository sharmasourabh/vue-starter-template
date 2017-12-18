import { mount, shallow, createLocalVue } from 'vue-test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import App from '../../../src/app.vue';
import auth from '../../../src/auth';
import router from '../../../src/route/index';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App', () => {
  it('Login button should be shown when user is not logged in.', () => {
    const store = new Vuex.Store({
      state: {
        isUserLoggedIn: false
      },
      getters: {
        isUserLoggedIn(state) { return state.isUserLoggedIn; }
      }
    });

    const wrapper = mount(App, {
      localVue, router, store, auth
    });
    expect(wrapper.find('.button.is-primary span:last-child').text()).toBe('Login');
  });

  it('Logout button should be shown when user is logged in.', () => {
    const store = new Vuex.Store({
      state: {
        isUserLoggedIn: true
      },
      getters: {
        isUserLoggedIn(state) { return state.isUserLoggedIn; }
      }
    });

    const wrapper = mount(App, {
      localVue, router, store, auth
    });
    expect(wrapper.find('.button.is-primary span:last-child').text()).toBe('Logout');
  });

  it('Sets the correct default data', () => {
    expect(typeof App.data).toBe('function');
    const defaultData = App.data();
    expect(defaultData.showNav).toBe(false);
    expect(typeof App.methods.logout).toBe('function');
  });
});
