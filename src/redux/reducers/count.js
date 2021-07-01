/* eslint-disable no-undef */
/*
 * @Author: your name
 * @Date: 2021-06-25 11:19:05
 * @LastEditTime: 2021-07-01 14:11:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/count.js
 */

import { INCREMENT,DECREMENT } from '../constant'
  // 1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
  // 2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)

  const initState = 0 //初始化状态
  const countRenducer = (preState = initState,action)=> {
    // 从action对象中获取：type/data
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type) {
      case INCREMENT: //加
        return preState + data
      case DECREMENT: //减
        return preState - data
      default: 
        return preState
    }

  }
export default countRenducer
