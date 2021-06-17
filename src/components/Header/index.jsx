import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import './index.css'

class Header extends Component {
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