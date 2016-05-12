import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleCell from '../components/ArticleCell';
import Loading from '../components/Loading';

import styles from './ArticleList.css';

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
        {
          this.props.isFetching ? <Loading/> : ''
        }
        <div className={styles.loadMore} onClick={this._onLoadMore.bind(this)}>加载更多</div>
      </div>
    );
  }

  _onLoadMore(){
    const lastId = this.props.articles.length > 0 ? this.props.articles[this.props.articles.length - 1].id : null;
    this.props.dispatch(readArticles(lastId));
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
