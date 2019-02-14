const errorRouter = [{
  path: '/404',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/error/404.vue'], resolve) }
},
{
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () =>
            import('@/views/error/403.vue')
},
{
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () =>
            import('@/views/error/500.vue')
}
]
export default errorRouter
