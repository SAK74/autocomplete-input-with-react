import React from 'react';
import ReactDOM from 'react-dom';
import {MainApp} from './MainApp';
import store from './STORE/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store = {store}>
    <MainApp />
  </Provider>
  , document.getElementById('root'));

