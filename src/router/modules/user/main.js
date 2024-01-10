const UserRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homeView.vue')
  },
  {
    path: '/register',
    name: 'SignUp',
    component: () => import('@/views/registerView.vue')
  },
  {
    path: '/login',
    name: 'logIn',
    component: () => import('@/views/loginView.vue')
  }
]

export default UserRoutes