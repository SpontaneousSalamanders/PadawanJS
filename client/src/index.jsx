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
import { AUTH_USER } from './actions/authActions.jsx';
import { SET_MENTOR_PRIVILEGES } from './actions/authActions.jsx';
import jwt_decode from 'jwt-decode';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// update application state with token information if needed
if (token) {
  // update authentication flag
  store.dispatch({ type: AUTH_USER });

  // update mentor privileges if needed
  let decoded_token = jwt_decode(token);

  if (decoded_token.type === 'mentor') {
    store.dispatch({ type: SET_MENTOR_PRIVILEGES });
  }
}



render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);

