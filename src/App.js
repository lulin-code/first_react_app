/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-07-02 14:57:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Demo from './components/4_Fragment'

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

