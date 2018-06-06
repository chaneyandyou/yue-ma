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
  Switch,
  Redirect
} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reducers'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(reducers, compose(
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
