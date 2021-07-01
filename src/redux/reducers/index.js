/*
 * @Author: your name
 * @Date: 2021-07-01 16:15:46
 * @LastEditTime: 2021-07-01 16:19:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/reducers/index.js
 */

/*
  该文件用于汇总所有的reducer为一个总的reducer
*/
// 引入combineReducers,用于汇总多个reducer
import { combineReducers } from 'redux'
// 引入Count组件服务的reducer
import count from './count'
// 引入Person组件服务的reducer
import persons from './person'
export default combineReducers({
  count,
  persons
})