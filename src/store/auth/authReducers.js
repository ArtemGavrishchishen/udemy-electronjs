import types from './authActionTypes';

const DEFAULT_STATE = {
  user: null,
  isChecking: false,
};

function authReducers(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case types.AUTH_REGISTER_INIT:
    case types.AUTH_LOGIN_INIT:
      return { ...state, isChecking: true }
    case types.AUTH_REGISTER_SUCCESS:
    case types.AUTH_LOGIN_SUCCESS:
      return { ...state, isChecking: false }
    case types.AUTH_ON_INIT:
      return { user: null, isChecking: true }
    case types.AUTH_ON_SUCCESS:
      return { user: payload, isChecking: false }
    case types.AUTH_ON_ERROR:
      return { user: null, isChecking: false }
    default: {
      return state;
    }
  }
};

export default authReducers;