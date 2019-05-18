import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app from './modules/app'
import nav from './modules/nav'
import tagsView from './modules/tagsView'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {},
	mutations: {},
	modules: {
    app,
    nav,
    tagsView
	},
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    // createPersistedState({ storage: window.sessionStorage })
  ],
});

export default store
