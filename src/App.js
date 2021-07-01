/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-07-01 17:51:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React,{Component} from 'react'
import Demo from './components/1_setState/index'

export default class APP extends Component{
  render() {
    return(
      <div>
        <Demo/>
      </div>
    )
  }
}

