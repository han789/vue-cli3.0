const homeRouters = [{
  path: '/',
  name: 'main1',
  redirect: '/home',
  meta: {
    title: '首页',
    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
  },
  component: () =>
        import('@/views/Main.vue'),
  children: [{
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () =>
            import('@/views/Home.vue')
  }]
}, {
  path: '/',
  name: 'main2',
  redirect: '/about',
  meta: {
    title: '关于',
    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
  },
  component: () =>
        import('@/views/Main.vue'),
  children: [{
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: () =>
            import('@/views/About.vue')
  }]
}]
export default homeRouters
