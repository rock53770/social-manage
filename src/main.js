
// import 'babel-polyfill'
// Object.assign = require('object-assign');

import 'jquery';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './config'
import './lib/util'

import Vue from 'vue'
import './directive/index'
import './filter/index'
// import store from './store/index'


import './assets/main.less'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 })

window.app = new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: {
    App
  }
})

