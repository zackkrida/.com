import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
    },
    {
      path: '/hire',
      name: 'hire',
      component: () => import('./views/Hire'),
    },
    {
      path: '/bits-and-bites',
      name: "'bits and bites",
      component: () => import('./views/Bits'),
    },
  ],
})
