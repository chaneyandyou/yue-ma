import React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import counter from './index.redux'
import Auth from './Auth'
import Dashboard from './Dashboard'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
