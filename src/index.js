/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-30 17:58:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/index.js
 */
// 引入核心库
import React from 'react';
// 引入reactDOM
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
ReactDOM.render(
  // 此处需要用Provider包裹APP，目的是让APP所有的后代容器组件都能接收到store
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
