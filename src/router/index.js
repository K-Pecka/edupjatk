import { createRouter, createWebHistory} from 'vue-router';

import UserRoutes from '@/router/modules/user/main.js'
import ClassesRoutes from '@/router/modules/classes/main.js'
import panelRoutes from '@/router/modules/panel/main.js'
const routes = [
  ...UserRoutes,
  ...ClassesRoutes,
  ...panelRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router;
