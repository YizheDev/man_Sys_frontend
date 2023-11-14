export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
      // {component: './404 '},
    ],
  },
  { path: '/welcome', name: 'welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: 'admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: 'sub-page', component: './Admin' },
      // { path: '/Admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage' }
    ],
  },
  { icon: 'table', name: '列表数据', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
