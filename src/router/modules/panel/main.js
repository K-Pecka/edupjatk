import modulRouters from '@/router/modules/educationModules/main.js'
const panelRoutes = [
    {
        path: '/panel',
        name: 'panel',
        component: () => import('@/views/PanelView.vue'),
        meta: { requiresAuth: true },
        children:[
            {path: '',name: 'start',component: () => import('@/views/modules/panel/StartView.vue'),meta: { requiresAuth: true }},
            {path: '/profile',name: 'profile',component: () => import('@/views/modules/panel/ProfileView.vue'),meta: { requiresAuth: true }},
            //{path: '/setting',name: 'setting',component: () => import('@/views/panel/settingView.vue'),meta: { requiresAuth: true }},
            {path: '/statistic',name: 'statistic',component: () => import('@/views/modules/panel/StatisticView.vue'),meta: { requiresAuth: true }},
            {path: '/test',name: 'test',component: () => import('@/views/modules/panel/TestView.vue'),meta: { requiresAuth: true }},
            {path: '/logOut',name: 'logOut',component: () => import('@/views/modules/panel/LogOutView.vue'),meta: { requiresAuth: true }},
            ...modulRouters
        ]
    }
  ]
  
  export default panelRoutes