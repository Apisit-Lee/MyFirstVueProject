import Vue from 'vue'
import Vuex from 'vuex'

import AnotherStore from './anotherStore.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    another: AnotherStore
  },
  state: {
    count: 0,
    comments: []
  },
  mutations: {
    addComment (state, comment) {
      state.comments.push(comment)
    }
  }
})

export default store
