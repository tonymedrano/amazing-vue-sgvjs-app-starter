import Vue from 'vue'
import App from './App.vue'

import SVG from "@/plugins/svg.js"

Vue.use(SVG)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
