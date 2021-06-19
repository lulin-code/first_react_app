/*
 * @Author: your name
 * @Date: 2021-06-17 14:18:41
 * @LastEditTime: 2021-06-18 18:37:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/components/Welcome/Welcome.js
 */
import React, { Component } from 'react';
import Item from '../Item'
import './index.css'

class List extends Component {
  render() {
    const {todos,updateTodo} = this.props
    return (
      <div>
        <ul className = "todo-main">
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;
