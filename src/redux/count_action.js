/*
 * @Author: your name
 * @Date: 2021-06-28 09:52:45
 * @LastEditTime: 2021-06-28 09:52:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/count_action.js
 */
import { INCREMENT,DECREMENT } from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})
