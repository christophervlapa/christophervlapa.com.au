import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

require('./assets/css/screen.css')

Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
	id: 'UA-21067403-1',
	router,
	// debug: {
	// 	enabled: !isProd,
	// 	sednHitTask: isProd
	// }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')