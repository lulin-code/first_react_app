/*
 * @Author: your name
 * @Date: 2021-06-28 09:52:45
 * @LastEditTime: 2021-06-28 11:55:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/count_action.js
 */
import { INCREMENT,DECREMENT } from './constant'
//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
// 异步action,就是指action的值为函数，异步action中一般都会调用同步action,异步action不是必须要用的
export const createIncrementAsyncAction = (data,time)=> {
  return (dispatch)=> {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}
