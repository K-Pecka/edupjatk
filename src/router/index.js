import { createRouter, createWebHistory} from 'vue-router';

import UserRoutes from '@/router/modules/user/main.js'
import ClassesRoutes from '@/router/modules/classes/main.js'

const routes = [
  ...UserRoutes,
  ...ClassesRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router;
