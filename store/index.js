import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  count: 1
})

export const mutations = {
  add(state) {
    state.count ++
  },
}
export const actions = {
  //TODO ajax here
}
