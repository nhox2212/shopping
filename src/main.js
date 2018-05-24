import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import Home from './components/Home'
import Product from './components/Product'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/details/:id', name: 'product', component: Product }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
