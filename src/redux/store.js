/*
 * @Author: your name
 * @Date: 2021-06-25 11:19:14
 * @LastEditTime: 2021-06-28 11:56:48
 * @LastEditors: Please set LastEditors
 * @Description: 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 * @FilePath: /first_react_app/src/redux/store.js
 */

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
export default createStore(countReducer, applyMiddleware(thunk))
