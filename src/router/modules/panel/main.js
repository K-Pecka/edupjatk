const panelRoutes = [
    {
        path: '/Panel',
        name: 'panel',
        component: () => import('@/views/panelView.vue'),
        children:[
            {path: '/profile',name: 'profile',component: () => import('@/views/panel/profileView.vue')},
            {path: '/setting',name: 'setting',component: () => import('@/views/panel/settingView.vue')},
            {path: '/statistic',name: 'statistic',component: () => import('@/views/panel/statisticView.vue')},
            {path: '/logOut',name: 'logOut',component: () => import('@/views/panel/logOutView.vue')}
        ]
    }
  ]
  
  export default panelRoutes