/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-28 14:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React,{Component} from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class APP extends Component{
  render() {
    return(
      <div>
        <Count store={store}/>
      </div>
    )
  }
}

