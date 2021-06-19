/*
 * @Author: your name
 * @Date: 2021-06-17 14:18:41
 * @LastEditTime: 2021-06-19 10:21:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/components/Welcome/Welcome.js
 */
import React, { Component } from 'react';
import Item from '../Item'
import PropTypes from 'prop-types';
import './index.css'

class List extends Component {
  // 对接收的props进行：类型。必要性的限制
  static propTypes = {
    updateTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <div>
        <ul className = "todo-main">
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;
