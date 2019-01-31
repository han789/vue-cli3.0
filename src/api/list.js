import http from '../utils/http'

export function getList () {
  return http.get(`/api/v1/topics`)
};
