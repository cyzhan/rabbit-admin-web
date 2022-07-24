import { createStore } from 'vuex'
import getMenu from '../custom/index.js'


export default createStore({
  state: {
    currentUser: null,
    menu: getMenu()
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
