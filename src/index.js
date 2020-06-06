import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './App';
import {store} from "./store"
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

