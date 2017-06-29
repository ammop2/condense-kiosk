// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import List from './components/List.vue'
import Item from './components/Item.vue'
import VueAxios from 'vue-axios'
import configuration from './configuration.json'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = 'Bearer ' + configuration.token
axios.defaults.baseURL = configuration.baseURL

Vue.component('list', List)
Vue.component('item', Item)

/* eslint-disable no-new */
new Vue({
  http: {
    root: '/root',
    headers: {
      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
    }
  },
  el: '#app',
  router,
  template: '<App/>',
  components: {App, List}
})
