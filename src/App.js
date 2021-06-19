/*
 * @Author: your name
 * @Date: 2021-06-16 19:25:58
 * @LastEditTime: 2021-06-19 10:20:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/App.js
 */

// 创建“外壳”组件APP
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class APP extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '跑步', done: false }
    ]
  }

  // 用于添加一个todo，接收的参数是todo对象
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos })
  }
  // 用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }
  // 用于删除一个todo对象
  deleteTodo = (id)=> {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=> {
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer />
      </div>
    )
  }
}

