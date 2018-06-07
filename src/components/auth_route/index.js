import React from 'react'
import fetch from '../../fetch'
import { withRouter } from 'react-router-dom'

@withRouter
export default class AuthRoute extends React.Component{

  componentDidMount() {
    this.handleAuth()
  }

  handleAuth() {
    const whiteRouter = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(whiteRouter.includes(pathname)) { // 当前已处于白名单中的路由，则返回null，不做auth处理
      return null
    }
    fetch({
      url: '/rest/user/info',
      method: 'get'
    })
    .then(res => {
      if(res.code === 'success') { // 已登录

      } else { // 未登陆
        this.props.history.push('/login')
      }
    })
  }

  render() {
    return(
      null
    )
  }
}
