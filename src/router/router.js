import otherRouter from './other/other'
import errorRouter from './moudles/error'
import homeRouter from './moudles/home'

export const loginRouters = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
  },
  component: () =>
        import('@/views/login/Login.vue')
}
export const otherRouters = [
  ...homeRouter, ...otherRouter
]
export const routers = [
  loginRouters,
  ...homeRouter,
  ...errorRouter,
  ...otherRouter
]
