/*
 * @Author: your name
 * @Date: 2021-07-01 14:12:23
 * @LastEditTime: 2021-07-01 14:17:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/redux/reducers/person.js
 */
import { ADD_PERSON } from '../constant'
// 初始化人的列表
const initState = [{id:'001',name:'tt',age:18}]
const personReduce = (perState=initState,action)=> {
    const {type,data} = action
    switch (type) {
      case ADD_PERSON:
        return [data,...perState]
    
      default:
        return perState
    }
}
export default personReduce