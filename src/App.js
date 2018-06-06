import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { addGun, removeGun, addGunAsync } from './index.redux'

@connect(
  state => ({
    num: state.counter
  }),
  { addGun, removeGun, addGunAsync }
)
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
    this._addGun = this._addGun.bind(this)
    this._addGunAsync = this._addGunAsync.bind(this)
  }

  _addGun() {
    this.props.addGun()
  }

  _addGunAsync() {
    this.props.addGunAsync()
  }

  render() {

    return (
      <div>
        现在有机枪{ this.props.num }把
        <Button type="primary" onClick={this._addGun}>加一把</Button>
        <Button type="primary" onClick={this._addGunAsync}>延迟两秒新增</Button>
      </div>
    )
  }
}

export default App
