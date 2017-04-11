import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router'
import routes from './routes.jsx'
import { Router, syncHistoryWithStore } from 'react-router-redux'

import App from './components/App.jsx';
import reducers from './reducers/index.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const history = syncHistoryWithStore(browserHistory, store)

//

render(
  <Provider store={createStoreWithMiddleware(reducers)} history={history}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.getElementById('app')
);

