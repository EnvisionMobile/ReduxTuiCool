import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ArticleList from './containers/ArticleList';
import articleReducer from './reducers/articlesReducer';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';


const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
  loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
)(createStore);

const store = createStoreWithMiddleware(articleReducer);
render(
  <Provider store={store}>
    <ArticleList />
  </Provider>,
  document.getElementById('root')
);
