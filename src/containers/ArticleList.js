import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import ArticleCell from '../components/ArticleCell';

import {readArticles} from '../actions/articlesAction'

class ArticleList extends Component {
  componentDidMount(){
    this.props.dispatch(readArticles());
  }

  render(){
    return (
      <div className="article-list-form">
        <div className="list">
          <ul>
            {
              this.props.articles.map(function(article) {
                return (<ArticleCell article={article}/>);
              })
            }
          </ul>
        </div>
        <Loading/>
      </div>
    );
  }
}

/**
 * 从应用的全局状态中,选择一部分映射到当前Component的props上
 * @param state
 */
function mapStateToProps(state){
  return {
    isFetching: state.isFetching,
    articles: state.articles,
    error: state.error
  };
}

export default connect(mapStateToProps)(ArticleList);
