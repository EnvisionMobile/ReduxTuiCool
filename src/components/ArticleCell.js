import React, { Component, PropTypes } from 'react'

export default class ArticleCell extends Component {
  render() {
    const {id, title, feed_title, img} = this.props.article;
    return (
      <li key={id}>
        <div>{title}</div>
        <div>{feed_title}</div>
        <img width={100} height={100} src={img}></img>
      </li>
    );
  }
}

ArticleCell.propTypes = {
  article: PropTypes.object
};
