import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
const history = createHashHistory();

import Root from './containers/Root';
import ArticleList from './containers/ArticleList';
import ArticleDetail from './containers/ArticleDetail';

export default function(){
  return (
    <Router history={ history }>
      <Route path="/" component={Root}>
        <IndexRoute component={ArticleList} />
        <Route path="list" component={ArticleList} />
        <Route path="detail/:id" component={ArticleDetail} />
      </Route>
    </Router>
  );
}
