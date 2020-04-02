const axios = require('axios')

export default {
  state: {
    user: undefined,
    token: undefined
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },

    unsetUser(state) {
      state.user = undefined
    },

    setToken(state, token) {
      state.token = token
      // TODO store token in local storage.
    },
    
    unsetToken(state) {
      state.token = undefined
      // TODO remove token from local storage.
    },
  },

  actions: {
    // Attempt to log in. Set user and token values if successful. Users can provide a username and password, or a token.
    logIn({ commit }, username, password, token) {
      axios.post('/login', {
        username: username,
        password: password,
        token: token
      }).then((response) => {
        // Success
        console.log('User Logged in: ' + JSON.stringify(response.data))
        commit('setUser', response.data.user)
        commit('setToken', response.data.token)
      }).catch((error) => {
        console.log('Login failed! ' + JSON.stringify(error)) // TODO proper notifications.
        commit('unsetUser')
        commit('unsetToken')
      })
    },

    // Clear the user value and the user's auth token.
    logOut({ commit }) {
      commit('unsetUser')
      commit('unsetToken')
      
      // TODO redirect the user to the homepage.
    }
  },

  getters: {
    getUser: (state) => {
      return state.user
    },

    getToken: (state) => {
      return state.token
    },

    loggedIn: (state) => {
      return typeof state.user !== 'undefined'
    }
  }
}