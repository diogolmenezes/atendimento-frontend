import Axios from 'axios';
import Config from '../../config/env.config';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const increment = () => async (dispatch) => {
  dispatch({
    type: INCREMENT_COUNTER,
  });
};


export const incrementIfOdd = () => async (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch({
    type: INCREMENT_COUNTER,
  });
};

export const CARREGAR_AGENDAMENTOS = 'CARREGAR_AGENDAMENTOS';
export function carregarAgendamentos() {
  const request = Axios({
    method: 'GET',
    url: `${Config.apiServerUrl}/atendimento-backend/agendamentos`,
    headers: {
      'x-cpf': '11111111111',
      'x-origin-application': 'aplicacao',
      'x-origin-channel': 'WEB',
    },
  });

  return {
    type: CARREGAR_AGENDAMENTOS,
    payload: request,
  };
}
