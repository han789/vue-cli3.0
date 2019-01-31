import axios from 'axios'

import {
  Message
} from 'iview'
import Util from './utils'
import $router from '../router'
import $store from '../store'

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ac2fa233d211137b3f2846c/example'
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = ''
// }

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000, // 请求超时时间
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'If-Modified-Since': '0',
    'Cache-Control': 'no-cache'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  var token = Util.getToken()
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  if (response.data.success === true || response.status === 200) {
    return response.data
  } else {
    Message.error(response.data.msg)
    return response.data
  }
},
error => {
  console.log('err' + error) // for debug 网络请求出错，可能服务器挂了之类的
  const response = error.response
  if (response.status === 401) {
    $store.dispatch('Logout')
    localStorage.clear()
    $router.push({
      name: 'login'
    })
  } else if (response.status === 403) {
    $router.push({
      name: '403-page'
    })
  } else {
    Message.error(response.data.message ? response.data.message : '系统错误请联系管理员')
  }
  return Promise.reject(error)
}
)

export default service
