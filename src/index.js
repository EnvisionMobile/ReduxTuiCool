import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import createRouter from './routers';

const loggerMiddleware = createLogger();
const reducer = combineReducers(reducers);
//const store = createStore(reducer, null, compose(
//  applyMiddleware(thunkMiddleware, loggerMiddleware),
//  window.devToolsExtension ? window.devToolsExtension() : f => f
//));

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    {
      createRouter()
    }
  </Provider>,
  document.getElementById('root')
);
