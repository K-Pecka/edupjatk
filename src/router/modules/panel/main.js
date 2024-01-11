import modulRouters from '@/router/modules/modulEducation/main.js'
const panelRoutes = [
    {
        path: '/Panel',
        name: 'panel',
        meta: { requiresAuth: true },
        component: () => import('@/views/panelView.vue'),
        children:[
            {path: '/profile',name: 'profile',component: () => import('@/views/panel/profileView.vue'),meta: { requiresAuth: true }},
            {path: '/setting',name: 'setting',component: () => import('@/views/panel/settingView.vue'),meta: { requiresAuth: true }},
            {path: '/statistic',name: 'statistic',component: () => import('@/views/panel/statisticView.vue'),meta: { requiresAuth: true }},
            {path: '/logOut',name: 'logOut',component: () => import('@/views/panel/logOutView.vue'),meta: { requiresAuth: true }},
            ...modulRouters
        ]
    }
  ]
  
  export default panelRoutes