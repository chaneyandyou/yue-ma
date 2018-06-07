import React from 'react'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'
import './index.scss'

export default class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
    this._onRegister = this._onRegister.bind(this)
  }

  _onRegister() {
    this.props.history.push('/register')
  }

  render() {
    return(
      <div className="login-container">
        <h2>登录页</h2>
        <WingBlank>
          <List>
            <InputItem>用户名：</InputItem>
            <WhiteSpace />
            <InputItem type="password">密码：</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this._onRegister} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}
