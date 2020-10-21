import * as api from '../../api/auth';
import types from './authActionTypes';

const userRegister = (data) => dispatch => {
  dispatch({ type: types.AUTH_REGISTER_INIT });

  return api
    .userRegister(data)
    .then(user => dispatch({ type: types.AUTH_REGISTER_SUCCESS }))
};



const login = data => dispatch => {
  dispatch({ type: types.AUTH_LOGIN_INIT });

  return api
    .login(data)
    .then(() => dispatch({ type: types.AUTH_LOGIN_SUCCESS }))
};


const logout = () => dispatch =>
  api
    .logout()
    .then(() => dispatch({ type: types.AUTH_LOGOUT_SUCCESS }));

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
  login,
  logout,
  listenToAuthChanges
};