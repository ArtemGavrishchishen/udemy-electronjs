import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import store from './store';

import App from './App';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('chatApp')
);
