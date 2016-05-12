import React, { Component, PropTypes } from 'react';

export default class Loading extends Component {
  render() {
    return (
      this.props.show ?
      <div className="loading-indicator"></div> : <div></div>
    );
  }
}

Loading.propTypes = {
  show: PropTypes.bool
};
