import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button
} from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { connect } from 'react-redux'
import './index.scss'

@connect(
  state => ({
    user: state.user
  }),
  { login }
)
export default class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
    this._onRegister = this._onRegister.bind(this)
    this._handleLogin = this._handleLogin.bind(this)
  }

  _onRegister() {
    this.props.history.push('/register')
  }

  _handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  _handleLogin() {
    const data = this.state
    this.props.login(data)
  }

  render() {
    return(
      <div className="login-container">
        { this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo} /> : null }
        <h2>登录页</h2>
        <WingBlank>
          <List>
            <InputItem
              onChange={v => this._handleChange('user', v)}
            >
              用户名：
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this._handleChange('password', v)}
            >
              密码：
            </InputItem>
          </List>
          <WhiteSpace />
          { this.props.user.msg ? <p className="error-msg">{ this.props.user.msg }</p> : null }
          <Button
            type="primary"
            onClick={this._handleLogin}
          >
            登录
          </Button>
          <WhiteSpace />
          <Button onClick={this._onRegister} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}
