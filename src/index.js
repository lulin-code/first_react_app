/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-22 15:42:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/index.js
 */
// 引入核心库
import React from 'react';
// 引入reactDOM
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
