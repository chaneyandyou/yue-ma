import React from 'react'
import {
  Link,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import App from './App'

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

@connect(
  state => state.auth,
  { logout }
)
class Dashboard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { match } = this.props
    const redirectToLogin = <Redirect to="/login" />
    const app =(
      <div>
        <ul>
          <li>
            <Link to={`${match.url}`}>一营</Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>二营</Link>
          </li>
          <li>
            <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
          </li>
        </ul>
        <Route path={`${match.url}`} exact component={App} />
        <Route path={`${match.url}/erying`} component={Erying} />
        <Route path={`${match.url}/qibinglian`} component={Qibinglian} />
      </div>
    )
    return (
      this.props.isAuth ? app : redirectToLogin
    )
  }
}

export default Dashboard
