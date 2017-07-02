// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import NewsItemSimple from './components/NewsItemSimple.vue'
import NewsItemSlider from './components/NewsItemSlider.vue'
import LoadingIndicator from './components/LoadingIndicator.vue'
import VueAxios from 'vue-axios'
import configuration from './configuration.json'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.component('LoadingIndicator', LoadingIndicator)
Vue.component('NewsItemSimple', NewsItemSimple)
Vue.component('NewsItemSlider', NewsItemSlider)

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

