import api from 'api'
import router from '@/router'

const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    roles: '',
    isLoginOut: false
  },
  getters: {
    token: state => state.token,
    avatar: state => state.avatar,
    name: state => state.name,
    roles: state => state.roles
  },
  mutations: {
    SET_ISLOGINOUT: (state, isLoginOut) => {
      state.isLoginOut = isLoginOut
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登录
    Login ({
      commit
    }, userInfo) {
      let username = userInfo.name
      return new Promise((resolve, reject) => {
        api.login(username).then(response => {
          if (response.success) {
            const data = response.data
            commit('SET_TOKEN', 'df611888-ad52-43ed-9954-96b7d41fda7a')
            commit('SET_NAME', data.loginname)
            commit('SET_AVATAR', data.avatar_url)
            commit('SET_ROLES', data.githubUsername)
            router.push({
              name: 'home'
            })
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', '')
        commit('SET_ISLOGINOUT', true)
        resolve()
      })
    },

    // 前端 登出
    FedLogOut ({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        resolve()
      })
    }
  }
}
export default user
