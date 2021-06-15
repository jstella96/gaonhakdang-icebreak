import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { store } from './store';
import router from "./router/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
