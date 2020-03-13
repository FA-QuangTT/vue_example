import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment (state, number) {
      // mutate state
      state.count += number;
    }
  },

  actions: {
    increment (context, number) {
      context.commit('increment', number);
    }
  },

  // getters: {
  //   counter (state) {
  //     return state.count
  //   }
  // }
})
