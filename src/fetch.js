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
service.interceptors.response.use(function(config) {
  setTimeout(() => {
    Toast.hide()
  }, 1000)
  return config
})

export default service
