import Vue from 'vue'
import {
  routers
} from './router'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}
const router = new VueRouter(RouterConfig)

//* **********路由拦截**************
router.beforeEach((to, from, next) => {
  let ctoken = store.state.user.token
  // 有ctoken且是内页或者路由指向登录页面 否则，重置到登录页面
  if (ctoken) {
    // 判断该路由是否需要登录权限
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})
router.afterEach((to, from, next) => {
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
export default router
//
