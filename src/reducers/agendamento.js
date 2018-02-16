import { CARREGAR_AGENDAMENTOS } from '../actions';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARREGAR_AGENDAMENTOS:
      console.log('REDUCER =>', action);
      return action.payload;
    default:
      return state;
  }
}
