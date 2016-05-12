import React, { Component, PropTypes } from 'react';
import styles from './ArticleCell.css';

export default class ArticleCell extends Component {
  render() {
    const {id, title, feed_title, img} = this.props.article;
    return (
      <li className={styles.listItem} key={id}>
        <div className={styles.title}>{title}</div>
        <div className={styles.from}>{feed_title}</div>
        {
          img ? <img width={100} height={100} src={img}></img> : ''
        }
      </li>
    );
  }
}

ArticleCell.propTypes = {
  article: PropTypes.object
};
