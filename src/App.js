/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-21 16:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class APP extends Component {
  // 初始化状态
  state = { 
    users: [], 
    isFirst:true,  //是否为第一次打开页面
    isLoading:false,  //是否处于加载中
    err:''  //存储请求相关的错误信息
   }
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div>
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}

