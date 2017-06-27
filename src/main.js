// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/app.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
setRem()
function setRem () {
  var html = document.documentElement
  var view = screen.availWidth
  html.style.fontSize = view / 15 + 'px'
}
