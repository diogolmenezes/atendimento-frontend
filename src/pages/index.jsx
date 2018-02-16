import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { incrementIfOdd } from '../actions';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hello react-boilerplate',
    };
  }

  onClickIncrementar = () => {
    const props = this.props;
    props.incrementIfOdd();
  }

  render() {
    const props = this.props;
    return (
      <div id="principal" className="dashboard-app">
        <div>{this.state.hello}</div>
        <button onClick={this.onClickIncrementar}>Incrementar</button>
        <label htmlFor="principal">{props.example.count}</label>
      </div>
    );
  }
}

Page.defaultProps = {
  incrementIfOdd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ example: state.example });
const mapDispatchToProps = dispatch => bindActionCreators({
  incrementIfOdd,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page);
