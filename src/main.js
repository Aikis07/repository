import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import index from '@/assets/css/index.css'

Vue.config.productionTip = false

new Vue({
  index,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
