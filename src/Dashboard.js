import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'
import App from './App'

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

function Error() {
  return <h2>404</h2>
}

class Dashboard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/dashboard">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Dashboard
