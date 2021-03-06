// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import axios from 'axios'
import App from './App'
import router from './router'
import NewsList from './components/NewsList.vue'
import NewsListItem from './components/NewsListItem.vue'
import NewsDetail from './components/NewsDetail.vue'
import '../node_modules/vue-material/dist/vue-material.css'
import VueAxios from 'vue-axios'
import configuration from './configuration.json'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)
Vue.use(VueMaterial)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('NewsList', NewsList)
Vue.component('NewsListItem', NewsListItem)
Vue.component('NewsDetail', NewsDetail)

Vue.prototype.$baseURL = configuration.baseURL
Vue.prototype.$token = configuration.token
Vue.prototype.$channels = configuration.channels
Vue.prototype.$activeTemplate = configuration.activeTemplate

axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.prototype.$token
axios.defaults.baseURL = Vue.prototype.$baseURL

axios.get('/subscriptions/current')
.then((response) => {
  let subscription = response.data
  Vue.prototype.$primaryColor = subscription.theme.primaryColor
  Vue.prototype.$secondaryColor = subscription.theme.secondaryColor
  Vue.prototype.$defaultLanguage = subscription.defaultLanguage

  // hint (pa): wait until we have subscription
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
  })
})

