const modulRouters = [
  {
    path: '/education',
    name: 'educationModule',
    component: () => import('@/views/panel/modulEducation.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/education/:chapter',
    component: () => import('@/views/panel/modulEducation/chapterView.vue'),
  },
  {
    path: '/education/:chapter/:module',
    name: 'ModuleView',
    component: () => import('@/views/panel/modulEducation/modulView.vue'),
    meta: { requiresAuth: true },
  },
];

export default modulRouters;