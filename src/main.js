// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import NewsItem from './components/NewsItem.vue'
import VueAxios from 'vue-axios'
import configuration from './configuration.json'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.prototype.$baseURL = configuration.baseURL
Vue.prototype.$token = configuration.token

axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.prototype.$token
axios.defaults.baseURL = Vue.prototype.$baseURL

Vue.component('NewsItem', NewsItem)

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
  components: {App}
})
