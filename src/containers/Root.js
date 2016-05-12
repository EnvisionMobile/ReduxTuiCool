import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';

class Root extends Component {
  render(){
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.any,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Root);
