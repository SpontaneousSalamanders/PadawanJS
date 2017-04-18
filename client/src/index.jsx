import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import routes from './routes.jsx'
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk'

import App from './components/App.jsx';
import reducers from './reducers/index.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);

