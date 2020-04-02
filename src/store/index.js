import Vue from 'vue'
import Vuex from 'vuex'
import authentication from '@/store/authentication'
//import game from '@/store/game'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authentication: authentication,
    //game: game
  }
})
