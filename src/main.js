import Vue from 'vue'
import App from './App'
import './assets/css/tailwind.css'

if (module.hot) {
  module.hot.accept()
}

new Vue({
  el: '#app',
  render: h => h(App)
})