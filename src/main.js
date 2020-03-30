import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.css'

// Import FontAwesome component globally
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faQuestion, faChartBar, faUser, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
library.add( faHome, faQuestion, faChartBar, faUser, faDoorOpen )

import { faRProject, faLinkedinIn, faGithubAlt, faVuejs } from '@fortawesome/free-brands-svg-icons'
library.add(faRProject, faLinkedinIn, faGithubAlt, faVuejs )

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('fa-icon', FontAwesomeIcon)

// Import P5 and any other drawing libraries
import p5 from 'p5'
Object.defineProperty(Vue.prototype, '$p5', { value: p5 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
