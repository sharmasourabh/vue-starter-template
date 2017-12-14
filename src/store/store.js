import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
  isUserLoggedIn: !!localStorage.getItem('auth_token')
};

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
  isUserLoggedIn: state => state.isUserLoggedIn
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  login: ({ commit }) => commit('login'),
  logout: ({ commit }) => commit('logout')
};

const mutations = {
  increment: (state) => {
    state.count += 1;
  },
  decrement: (state) => {
    state.count -= 1;
  },
  login: (state) => {
    state.isUserLoggedIn = true;
  },
  logout: (state) => {
    state.isUserLoggedIn = false;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
