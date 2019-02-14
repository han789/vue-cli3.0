import * as listApi from './list'
import * as userApi from './user'

let api = {
  ...listApi,
  ...userApi
}
export default api
