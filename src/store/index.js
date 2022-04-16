import Vue from 'vue'
import Vuex from 'vuex'
import FirebaseService from './modules/FirebaseService'
//import School from './modules/School'
//import SchoolClass from './modules/SchoolClass'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    menuTitle: undefined,
  },
  mutations: {
    setMenuTitle(state, payload){
      state.menuTitle = payload;
    },
    setLoading(state, payload){
      state.loading= payload.isloading;
    },
  },
  actions: {
  },
  modules: {
    FirebaseService,
    //School,
    //SchoolClass
  },
  getters: {
    menuTitle(state){
      return state.menuTitle
    },
    loading(state){
      return state.loading;
    }
  }
})
