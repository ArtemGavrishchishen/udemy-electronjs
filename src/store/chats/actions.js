import * as api from '../../api/chats';
import types from './actionTypes';

const fetchChats = () => dispatch =>
  api
    .fetchChats()
    .then(chats => dispatch({
      type: types.CHATS_FETCH_SUCCESS,
      payload: chats
    }))

export default { fetchChats };