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
    children: [
      {
        path: ':module',
        name: 'ModuleView',
        component: () => import('@/views/panel/modulEducation/modulView.vue'),
      },
    ],
  },
];

export default modulRouters;