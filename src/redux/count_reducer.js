/* eslint-disable no-undef */
/*
 * @Author: your name
 * @Date: 2021-06-25 11:19:05
 * @LastEditTime: 2021-06-25 17:27:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/count_reducer.js
 */

  // 1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
  // 2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)

  const initState = 0 //初始化状态
  const countRenducer = (preState = initState,action)=> {
    // 从action对象中获取：type/data
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type) {
      case 'increment': //加
        return preState + data
      case 'decrement': //减
        return preState - data
      default: 
        return preState
    }

  }
export default countRenducer
