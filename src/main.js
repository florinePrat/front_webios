import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
//Vuesax styles
Vue.use(Vuesax, {
  colors: {
    primary:'#9b2ed0',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
