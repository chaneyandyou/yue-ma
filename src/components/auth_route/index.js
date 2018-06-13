import React from 'react'
import fetch from '../../fetch'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@withRouter
@connect(
  null,
  { loadData }
)
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
        this.props.loadData(res.data)
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
