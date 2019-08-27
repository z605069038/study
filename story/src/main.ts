import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import myToast from 'easytoast-f-vue';

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(myToast);


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
