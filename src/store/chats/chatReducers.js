import types from './chatActionTypes';

const DEFAULT_STATE = {
  items: []
};

function chatReducers(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case types.CHATS_FETCH_SUCCESS:
      return { items: payload }
    default: {
      return state;
    }
  }
};

export default chatReducers;