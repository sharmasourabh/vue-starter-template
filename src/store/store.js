import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  viewLoad: false,
  user: false,
  count: 0
};

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd')
};

const actions = {
  deneme: ({ commit, dispatch, state }, type) => {
    console.log(1);
  },
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
};

const mutations = {
  viewLoad: (state, status) => {
    state.viewLoad = status;
  },
  increment: (state) => {
    state.count += 1;
  },
  decrement: (state) => {
    state.count -= 1;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
