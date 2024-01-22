import { createRouter, createWebHistory } from 'vue-router'

import userRouters from '@/router/modules/user/main.js'
import ClassesRoutes from '@/router/modules/classes/main.js'
import panelRouters from '@/router/modules/panel/main.js'
import { useStore } from '@/stores/userStorage.js'

const routes = [...userRouters, ...ClassesRoutes, ...panelRouters]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.publicPath = ['/access', '/']
router.paths = {
    home: '/',
    panel: '/panel'
};

router.goTo= (targetPath) => {
  router.push(targetPath);
}
const panelGuard = (to, from, next, isLoggedIn) => {
  if (!isLoggedIn()) {
    next('/access')
  } else {
    next()
  }
}
router.beforeEach((to, from, next) => {
  const {getAccessPath,isLoggedIn} = useStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    panelGuard(to, from, next,isLoggedIn)
  } else {
    if (getAccessPath(to.path)) {
      next('/panel')
    } else {
      next()
    }
  }
})
export default router
