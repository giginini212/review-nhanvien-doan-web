import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import MC_Header from './common/MC/MC_Header';
import axios from 'axios';

// set main base API url
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// set axios header to authoriza user
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

ReactDOM.render(
  <React.StrictMode>
    <MC_Header />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
