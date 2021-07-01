/*
 * @Author: your name
 * @Date: 2021-07-01 14:07:16
 * @LastEditTime: 2021-07-01 15:06:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/actions/person.js
 */
import { ADD_PERSON } from '../constant'
// 创建添加一个人的action
export const addPerson = personObj => ({type:ADD_PERSON,data:personObj})

