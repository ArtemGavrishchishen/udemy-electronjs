import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import App from './App';

render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('chatApp')
);
