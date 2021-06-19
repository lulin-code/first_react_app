/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'   
import './index.css';
export default class Footer extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    handleCheckAll:PropTypes.func.isRequired,
    clearAllDone:PropTypes.func.isRequired
  }

  // 全选checkbox的回调
  handleCheckAll = (event)=> {
    this.props.handleCheckAll(event.target.checked)
  }
  // 清除所有已完成
  clearAllDone = ()=> {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    // 已完成的个数
    const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
    const total = todos.length
    console.log(doneCount)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll}   checked={doneCount === total && total !==0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}/</span> 全部{total}
        </span>
        <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    ) 
  }
}
