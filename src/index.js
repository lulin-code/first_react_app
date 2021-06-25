/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-25 17:31:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/index.js
 */
// 引入核心库
import React from 'react';
// 引入reactDOM
import ReactDOM from 'react-dom';
// 引入store
import store from './redux/store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(()=>{
  ReactDOM.render(<App />, document.getElementById('root'))
})
reportWebVitals();
