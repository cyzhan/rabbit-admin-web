import { createStore } from 'vuex'

export default createStore({
  state: {
    currentUser: null
  },
  getters: {
  },
  mutations: {
    updateCurrentUser: (state, payload) => {
      state.currentUser = payload
    }
  },
  actions: {
    updateCurrentUser: (context, userData) => {
      context.commit('updateCurrentUser', userData)
    }
  },
  modules: {
  }
})
