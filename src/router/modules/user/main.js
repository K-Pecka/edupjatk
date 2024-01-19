const UserRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homeView.vue')
  },
  {
    path: '/access',
    name: 'access',
    component: () => import('@/views/accessView.vue')
  }
]

export default UserRoutes