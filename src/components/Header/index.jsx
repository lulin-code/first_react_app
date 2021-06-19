import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

class Header extends Component {
  // 对接收的props进行：类型。必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  // 点击回车的调用方法
  handleKeyUp = (event) => {
     const {keyCode,target} = event;
     if (keyCode !==13) return
     //  添加的todo名字不能为空
     if (target.value.trim() === '') {
        return alert('输入不能为空')
    }
     const todoObj = {id:nanoid(),name:target.value,done:false}
     //  将todoObj传递给APP
     this.props.addTodo(todoObj)
     //  清空
     target.value = ''
  }
  render() {
    return (
      <div className = "todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按下回车键确认" />
      </div>
    );
  }
}

export default Header;