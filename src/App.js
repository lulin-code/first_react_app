/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-21 18:21:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class APP extends Component {
 
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div>
        <Search/>
        <List  />
      </div>
    )
  }
}

