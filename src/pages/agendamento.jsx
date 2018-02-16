import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { propTypes } from 'prop-types';
import { carregarAgendamentos } from '../actions';

class Agendamento extends Component {
  componentWillMount() {
    this.props.carregarAgendamentos();
  }

  render() {
    const props = this.props;
    return (
      <div id="principal" className="dashboard-app">
        <div>{props.agendamento}</div>
      </div>
    );
  }
}

Agendamento.propTypes = {
  carregarAgendamentos: propTypes.any.isRequired,
};

Agendamento.defaultProps = {
  carregarAgendamentos: '',
};

const mapStateToProps = ({ agendamento }) => ({ agendamento });
const mapDispatchToProps = dispatch => bindActionCreators({ carregarAgendamentos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Agendamento);
