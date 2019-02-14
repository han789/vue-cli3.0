import http from '../utils/http'

export function login (loginname) {
  return http.get(`/api/v1/user/${loginname}`)
};
export function getToken (token) {
  return http.post(`/api/v1/${token}`)
};
