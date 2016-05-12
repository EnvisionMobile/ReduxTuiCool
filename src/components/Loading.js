import React, { Component } from 'react';
require('./Loading.less');


export default class Loading extends Component {
  render() {
    return (
      <div className="loader-container show">
        <div className="loading-anim">
          <div className="circle no1"></div>
          <div className="circle no2"></div>
          <div className="circle no3"></div>
          <div className="circle no4"></div>
        </div>
      </div>
    );
  }
}
