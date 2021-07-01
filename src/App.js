/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-07-01 18:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Demo from './components/2_lazyLoad/index.jsx'

export default class APP extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Demo />
        </BrowserRouter>
      </div>
    )
  }
}

