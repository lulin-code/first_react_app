/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-19 17:45:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React,{Component} from 'react'
import Search from './components/Search'
import List from './components/List'
export default class APP extends Component{
  render() {
    return(
      <div>
        <Search/>
        <List/>
      </div>
    )
  }
}

