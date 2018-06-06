import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import axios from './fetch'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

@connect(
  state => state.auth,
  { login }
)
class Auth extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
    this._login = this._login.bind(this)
  }

  componentDidMount() {
    axios({
      url: '/rest/data',
      method: 'get'
    })
    .then(res => {
      console.log('res')
      console.log(res)
    })
  }

  _login() {
    console.log('111')
    console.log(this.props.login)
    this.props.login()
  }

  render() {
    return (
      <div>
        {
          this.props.isAuth ?
            <Redirect to="/dashboard" />
            :
            null
        }
        <h2>你暂时没有权限，请登录</h2>
        <button onClick={this._login}>登录</button>
      </div>
    )
  }
}

export default Auth
