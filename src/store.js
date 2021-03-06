import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * STATE
 */
const state = {
  count: 0,
  menuOpen: false,
}

/**
 * MUTATIONS
 */
const mutations = {
  INCREMENT(state) {
    state.count++
  },
  INCREMENT_BY_NUMBER(state, num) {
    const intNum = parseInt(num, 10);
    state.count = state.count + intNum
  },
  DECREMENT(state) {
    state.count--
  },
  WIPE(state) {
    state.count = 0
  },
  MENU_TOGGLE(state) {
    state.menuOpen = !state.menuOpen
  },
}

/**
 * ACTIONS
 */
const actions = {
  increment: ({ commit }) => commit('INCREMENT'),
  decrement: ({ commit }) => commit('DECREMENT'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('INCREMENT')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCREMENT')
        resolve()
      }, 1000)
    })
  },
  incrementManual: ({ commit }, num) => commit('INCREMENT_BY_NUMBER', num),
  resetToZero: ({ commit }) => commit('WIPE'),
  toggleMenu: ({ commit }) => commit('MENU_TOGGLE'),
}

/**
 * GETTERS
 */
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  menuOpen: state => state.menuOpen,
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
