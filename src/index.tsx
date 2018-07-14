import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {
         routes.map(({ name, path, exact = true, component }) => (
          <Route path={path} key={name} exact={exact} component={component} />
        ))
      }
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

