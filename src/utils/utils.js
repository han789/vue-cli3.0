import semver from 'semver'
import packjson from '../../package.json'
import axios from 'axios'
import {
  Base64
} from 'js-base64'
import store from '@/store'
// import { appRouter } from '../router/router';
let util = {
  getToken () {
    return store.getters.token
  },
  getNickname () {
    return store.getters.nickname
  },
  getUsername () {
    return store.getters.username
  },
  isSign () {
    if (store.getters.token) {
      return true
    }
    return false
  },
  decodeToken (token) {
    if (token && token.indexOf('.') > 0) {
      var arr = token.split('.')
      var user = Base64.decode(arr[1])
      console.info(user)
      return user
    }
  },
  getQueryString (name) {
    /* eslint-disable */
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
            /* eslint-enable */
  },
  setDocumentTitle (title) {
    title = title || 'PB Admin'
    window.document.title = title
  },
  hasPermission (menuPermCode) {
    if (menuPermCode) {
      return store.getters.userperms.indexOf(menuPermCode) > -1
    }
    return true
  },
  getBreadcrumbArray (routers) {
    var currentPathArr = [{
      title: '首页',
      path: '/home',
      name: 'home'
    }]
    if (routers && routers.length > 0 && routers[0].name !== 'main') {
      routers.forEach((item, index) => {
        currentPathArr.push({
          title: item.meta.title,
          path: index === 0 ? '' : item.path,
          name: item.name
        })
      })
    }
    return currentPathArr
  },
  copy (target, dis) {
    if (target && dis) {
      for (var item in dis) {
        dis[item] = target[item]
      }
    }
  },
  // 添加事件
  addEvent (obj, type, fn) {
    if (obj.attachEvent) {
      obj['e' + type + fn] = fn
      obj[type + fn] = function () {
        obj['e' + type + fn](window.event)
      }
      obj.attachEvent('on' + type, obj[type + fn])
    } else {
      obj.addEventListener(type, fn, false)
    }
  },
  // 事件移除
  removeEvent (obj, type, fn) {
    if (obj.detachEvent) {
      obj.detachEvent('on' + type, obj[type + fn])
      obj[type + fn] = null
    } else {
      obj.removeEventListener(type, fn, false)
    }
  },
  // 是否为正整数
  isPositiveNum (s) {
    var re = /^[0-9]*[1-9][0-9]*$/
    return re.test(s)
  }
}
util.title = function (title) {
  title = title || 'PB Admin'
  window.document.title = title
}

util.inOf = function (arr, targetArr) {
  let res = true
  arr.map(item => {
    if (targetArr.indexOf(item) < 0) {
      res = false
    }
  })
  return res
}

util.oneOf = function (ele, targetArr) {
  if (targetArr && targetArr.indexOf(ele) >= 0) {
    return true
  } else {
    return false
  }
}

util.fullscreenEvent = function (vm) {
  vm.$store.commit('updateMenulist')
}

util.checkUpdate = function (vm) {
  axios.get('https://api.github.com/repos/iview/iview-admin/releases/latest').then(res => {
    let version = res.data.tag_name
    vm.$Notice.config({
      duration: 0
    })
    if (semver.lt(packjson.version, version)) {
      vm.$Notice.info({
        title: 'iview-admin更新啦',
        desc: '<p>iView-admin更新到了' + version + '了，去看看有哪些变化吧</p><a style="font-size:13px;" href="https://github.com/iview/iview-admin/releases" target="_blank">前往github查看</a>'
      })
    }
  })
}
util.download = function (data, type) { // 下载文件
  if (!data) {
    return
  }
  let url = window.URL.createObjectURL(new Blob([data]))
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  if (type === 'excel') {
    link.setAttribute('download', '我的询报价.xlsx')
  } else if (type === 'pdf') {
    link.setAttribute('download', '我的询报价.pdf')
  }

  document.body.appendChild(link)
  link.click()
}
util.toThousands = function (num) {
  // return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  num = num + ''
  if (!num.includes('.')) {
    num += '.'
  }
  return num.replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
    return $1 + ','
  }).replace(/\.$/, '')
}

export default util
