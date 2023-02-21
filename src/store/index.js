import Vue from 'vue'
import Vuex from 'vuex'
import GetUsers from '@/API/auth/users.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: null,
    activeUser: null,
  },
  getters: {
  },
  mutations: {
    updateUsers(state, user) {
      state.activeUser = user.user
    },
    setToken(state, user) {
      state.accessToken = user
    },
  },
  actions: {
    async login({ commit }, inputData) {
      const res = await GetUsers.authUser(inputData.mail, inputData.password)
      if (res === 400) {
        return false
      } else {
        commit('updateUsers', res.data)
        commit('setToken', res.data.accessToken)
      }
    }
  },
  modules: {
  }
})
