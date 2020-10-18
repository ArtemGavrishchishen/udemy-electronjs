import * as api from '../../api/auth';
import types from './authActionTypes';

const userRegister = (data) => dispatch =>
  api
    .userRegister(data)
    .then(user => dispatch({ type: types.AUTH_REGISTER_SUCCESS }));

const listenToAuthChanges = () => dispatch => {
  dispatch({ type: types.AUTH_ON_INIT });

  api.onAuthStateChanges(authUser => {
    if (authUser) {
      dispatch({ type: types.AUTH_ON_SUCCESS, payload: authUser });
    } else {
      dispatch({ type: types.AUTH_ON_ERROR });
    }
  });
}



export default {
  userRegister,
  listenToAuthChanges
};