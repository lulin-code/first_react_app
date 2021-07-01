/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-07-01 14:02:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React,{Component} from 'react'
import Count from './containers/Count' //引入的Count的容器组件
import Person from './containers/Person' //引入的Person的容器组件


export default class APP extends Component{
  render() {
    return(
      <div>
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}

