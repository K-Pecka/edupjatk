const modulRouters = [
  {
    path: '/education',
    name: 'educationModule',
    component: () => import('@/views/modules/panel/EducationModule.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/education/:chapter',
    component: () => import('@/views/modules/educationModules/ChapterView.vue'),
  },
  {
    path: '/education/:chapter/:module',
    name: 'ModuleView',
    component: () => import('@/views/modules/educationModules/ModulView.vue'),
    meta: { requiresAuth: true },
  },
];

export default modulRouters;