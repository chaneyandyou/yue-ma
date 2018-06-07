import React from 'react'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from 'antd-mobile'
import './index.scss'

export default class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      type: 'car'
    }
    this._onRegister = this._onRegister.bind(this)
    this._onLogin = this._onLogin.bind(this)
  }

  _onRegister() {

  }

  _onLogin() {
    this.props.history.push('/login')
  }

  render() {
    const { type } = this.state
    const RadioItem = Radio.RadioItem
    return(
      <div className="register-container">
        <h2>注册页面</h2>
        <WingBlank>
          <List renderHeader={() => '基本信息'}>
            <InputItem>用户名：</InputItem>
            <WhiteSpace />
            <InputItem>真实姓名：</InputItem>
            <WhiteSpace />
            <InputItem type="password">密码：</InputItem>
            <WhiteSpace />
            <InputItem type="password">确认密码：</InputItem>
          </List>
          <List renderHeader={() => '角色'}>
            <RadioItem checked={type === 'car'}>
              车主
            </RadioItem>
            <RadioItem checked={type === 'guest'}>
              顺客
            </RadioItem>
          </List>
          <WhiteSpace />
          <Button onClick={this._onRegister} type="primary">注册</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this._onLogin}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}
