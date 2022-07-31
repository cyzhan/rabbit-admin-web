import { createStore } from 'vuex'
import getMenu from '../custom/index.js'


export default createStore({
  state: {
    currentUser: null,
    menu: null,
    sidebarHeight: null
  },
  getters: {
  },
  mutations: {
    updateCurrentUser: (state, payload) => {
      state.menu = getMenu(payload.permission)
      delete payload.permission
      state.currentUser = payload   
    },
    updateSidebarHeight: (state, payload) => {
      state.sidebarHeight = payload
    }
  },
  actions: {
    updateCurrentUser: (context, userData) => {
      context.commit('updateCurrentUser', userData)
    },
    updateSidebarHeight: (context, height) => {
      context.commit('updateSidebarHeight', height)
    }
  },
  modules: {
  }
})
