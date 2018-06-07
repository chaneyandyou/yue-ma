import axios from 'axios'
import { Toast } from 'antd-mobile'

const service = axios.create({
  timeout: 5000
})

// 拦截请求
service.interceptors.request.use(function(config) {
  Toast.loading('加载中', 0)
  return config
})

// 拦截响应
service.interceptors.response.use(
  response => {
    Toast.hide()
    if(response.status !== 200) {
      Toast.offline('网络出错了', 1);
    } else {
      return response.data
    }
  },
  error => {
    Toast.hide()
    Toast.fail('出错了', 1);
    return Promise.reject(error)
  }
)

export default service
