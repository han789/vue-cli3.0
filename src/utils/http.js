import request from './request'
const http = {
  request (config) {
    request(config)
  },
  post (url, data) {
    return request({
      url,
      method: 'post',
      data
    })
  },

  get (url, params) {
    return request({
      url,
      method: 'get',
      params
    })
  },

  put (url, data) {
    return request({
      url,
      method: 'put',
      data
    })
  },

  delete (url) {
    return request({
      url,
      method: 'delete'
    })
  },

  download (url, params) {
    return request({
      url,
      method: 'get',
      params,
      responseType: 'blob'
    })
  },

  downloadPost (url, data) {
    return request({
      url,
      method: 'post',
      data,
      responseType: 'blob'
    })
  }
}

export default http
