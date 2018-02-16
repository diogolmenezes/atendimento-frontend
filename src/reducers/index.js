import { combineReducers } from 'redux';
import example from './example';
import agendamento from './agendamento';

const Reducers = combineReducers({ example, agendamento });

export default Reducers;
