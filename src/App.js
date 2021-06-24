/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-24 15:54:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React,{Component} from 'react'
import { Button } from 'antd'
import { WechatOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class APP extends Component{
  render() {
    return(
      <div>
        APP.......
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
      </div>
    )
  }
}

