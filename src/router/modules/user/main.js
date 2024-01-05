const UserRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/register',
    name: 'SignUp',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'logIn',
    component: () => import('@/views/LoginView.vue')
  }
  // },
  // {
  //   path: '/panel',
  //   name: 'panel',
  //   component: () => import('@/views/PanelView.vue')
  // }
]

export default UserRoutes