import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import './index.scss'

@connect(
  state => ({
    user: state.user
  }),
  { register }
)
export default class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      realName: '',
      password: '',
      repeatpwd: '',
      type: 'car'
    }
    this._onRegister = this._onRegister.bind(this)
    this._onLogin = this._onLogin.bind(this)
  }

  _onRegister() {
    this.props.register(this.state)
  }

  _onLogin() {
    this.props.history.push('/login')
  }

  _handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { type } = this.state
    const RadioItem = Radio.RadioItem
    return(
      <div className="register-container">
        { this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo} /> : null }
        <h2>注册页面</h2>
        <WingBlank>
          <List renderHeader={() => '基本信息'}>
            <InputItem
              onChange={v => this._handleChange('user', v)}
            >
              用户名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this._handleChange('realName', v)}
            >
              真实姓名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this._handleChange('password', v)}
            >
              密码：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this._handleChange('repeatpwd', v)}
            >
              确认密码：
            </InputItem>
          </List>
          <List renderHeader={() => '角色'}>
            <RadioItem
              checked={type === 'car'}
              onChange={() => this._handleChange('type', 'car')}
            >
              车主
            </RadioItem>
            <RadioItem
              checked={type === 'guest'}
              onChange={() => this._handleChange('type', 'guest')}
            >
              顺客
            </RadioItem>
          </List>
          <WhiteSpace />
          { this.props.user.msg ? <p className="error-msg">{ this.props.user.msg }</p> : null }
          <Button onClick={this._onRegister} type="primary">注册</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this._onLogin}>登录</Button>
        </WingBlank>
      </div>
    )
  }
}
