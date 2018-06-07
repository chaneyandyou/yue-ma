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
  Switch
} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Routes from './routes'
import AuthRoute from './components/auth_route'
import './assets/common.css'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

function Boss() {
  return <h2>boss</h2>
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/boss" component={Boss}/>
          {
            Routes.map(({ name, path, exact = true, component }) => (
              <Route path={path} key={name} exact={exact} component={component} />
            ))
          }
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
