const UserRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/access',
    name: 'access',
    component: () => import('@/views/AccessView.vue')
  }
]

export default UserRoutes