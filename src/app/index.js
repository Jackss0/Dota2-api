import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';

import data from './data.json';
import App from './App.js';


render(
  <App />
  ,document.getElementById('root'));
