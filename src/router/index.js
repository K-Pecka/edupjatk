import { createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>import('@/views/HomeView.vue'),
  },
  {
    path: '/register',
    name: 'SignUp',
    component: () =>import('@/views/RegisterView.vue'),
  },
  {
    path: '/login',
    name: 'logIn',
    component: () =>import('@/views/LoginView.vue'),
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
