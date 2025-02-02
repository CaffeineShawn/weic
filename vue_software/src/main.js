import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//添加全局样式
import './assets/css/global.css'

//导入axios
import axios from 'axios'

//挂在axios
Vue.prototype.$http = axios;
//设置访问根路径
axios.defaults.baseURL = "http://localhost:8085"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
