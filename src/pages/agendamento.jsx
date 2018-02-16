import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { carregarAgendamentos } from '../actions';

class Agendamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agendamentos: [],
    };
  }

  componentWillMount() {
    const props = this.props;

    props.carregarAgendamentos()
      .then();
  }

  render() {
    return (
      <div id="principal" className="dashboard-app">
        <div>{this.state.agendamentos}</div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ carregarAgendamentos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Agendamento);
