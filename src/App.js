/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-17 14:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React,{Component} from 'react'
import Hello from './components/Hello/Hello.jsx'
import Welocme from './components/Welcome/Welcome.jsx'
export default class APP extends Component{
  render() {
    return(
      <div>
        <Hello/>
        <Welocme/>
      </div>
    )
  }
}

