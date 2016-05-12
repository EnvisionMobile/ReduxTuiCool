import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import ArticleList from './containers/ArticleList';
import articleReducer from './reducers/articlesReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(articleReducer, {isFetching: false,
  articles: [],
  error: null}, compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


render(
  <Provider store={store}>
    <ArticleList />
  </Provider>,
  document.getElementById('root')
);
