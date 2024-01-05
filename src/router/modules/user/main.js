import x from '@/views/x.vue';

const UserRoutes = [
  {
    path: '/user/:id',
    name: 'user-parent',
    component: x,
    children: [
      { path: '', name: 'user', component: x },
      {
        path: 'x',
        name: 'x',
        component: x,
      },
      {
        path: 'x',
        name: 'x',
        component: x,
      },
    ],
  },
];

export default UserRoutes;