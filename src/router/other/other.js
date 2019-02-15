const otherRouter = [{
  path: '/other',
  name: 'other',
  meta: {
    title: '首页',
    active: 'other',
    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
  },
  redirect: '/other/index',
  component: () =>
        import('@/views/Main.vue'),
  children: [{
    path: '/other/index',
    name: 'other-list',
    meta: {
      title: '首页',
      active: 'other-list',
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () =>
            import('@/views/other/other-list')
  }, {
    path: '/other/index2',
    name: 'other-list2',
    meta: {
      title: '首页',
      active: 'other-list2',
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () =>
            import('@/views/other/other-list')
  }, {
    path: '/other/index3',
    name: 'other-list3',
    meta: {
      title: '首页',
      active: 'other-list3',
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () =>
            import('@/views/other/other-list')
  }]
}]
export default otherRouter
