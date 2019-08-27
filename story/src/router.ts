import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login/Login.vue';
import Home from './views/home/Home.vue';
import Bigevent from './views/bigevent/Bigevent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path:'/bigevent',
      name:'bigevent',
      component: Bigevent
    }
  ],
});
