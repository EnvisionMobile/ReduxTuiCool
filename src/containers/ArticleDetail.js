import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import styles from './ArticleDetail.css';

import {readArticleDetail} from '../actions/articlesAction';

class ArticleDetail extends Component {
  componentDidMount(){
    this.props.dispatch(readArticleDetail(this.props.params.id));
  }

  render(){
    console.log('@@@ article', this.props.article);
    const {title, content} = this.props.article;
    return (
      <div className={styles.form}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content} dangerouslySetInnerHTML={this._createContent(content)}></div>
      </div>
    );
  }

  _createContent(content){
    return {
      __html: content
    };
  }
}

ArticleDetail.propTypes = {
  article: PropTypes.object,
  dispatch: PropTypes.func,
  params: PropTypes.object
};

function mapStateToProps(state){
  return state.articleDetail;
}

export default connect(mapStateToProps)(ArticleDetail);
