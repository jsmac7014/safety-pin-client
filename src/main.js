// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueSession from 'vue-session'
import router from './router'
//import VueSocketIO from 'vue-socket.io'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify)
Vue.prototype.$http = axios

//Vue.use(VueSocketIO, 'http://localhost:8080')
Vue.use(VueSession)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
