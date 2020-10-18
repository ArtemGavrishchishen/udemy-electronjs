import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { chatReducers } from './chats';
import { authReducers } from './auth';

const rootReducer = combineReducers({
  chats: chatReducers,
  auth: authReducers,
});

const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);

export default store;