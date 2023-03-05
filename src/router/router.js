import {createRouter, createWebHashHistory} from "vue-router";
import store from '../store'
const routes = [
    { path: '/comunity', component: () => import('../pages/_home.vue') },
    { path: '/user', component: () => import('../pages/_user.vue'), meta: {requiresAuth: true}},
    { path: '/pilots/:id', component: () => import('../pages/_pilot.vue'), meta: {requiresAuth: true} },
    { path: '/pilots', component: () => import('../pages/_pilots.vue'), meta: {requiresAuth: true} },
    { path: '/register', component: () => import('../pages/_register.vue')},
    { path: '/', component: () => import('../pages/_login.vue') },
    { path: '/leaderboard', component: () => import('../pages/_leaderboard.vue'),meta: {requiresAuth: true}},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../shared/NoPageFound.vue') }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  router.beforeEach((to, from, next) => {
    const currentAuth = store.state.logged;
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth && !currentAuth) {
      next("/login");
    } else next();
  });

  

  export default router



  //this.$route.params.id  #Sacar parametro url

  

