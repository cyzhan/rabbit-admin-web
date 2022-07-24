import { createStore } from 'vuex'
import getMenu from '../custom/index.js'


export default createStore({
  state: {
    currentUser: null,
    menu: null
  },
  getters: {
  },
  mutations: {
    updateCurrentUser: (state, payload) => {
      state.menu = getMenu(payload.permission)
      delete payload.permission
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
