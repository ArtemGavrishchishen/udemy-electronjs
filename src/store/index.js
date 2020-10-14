import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { chatReducers } from './chats';

const rootReducer = combineReducers({
  chats: chatReducers,
});

const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);

export default store;