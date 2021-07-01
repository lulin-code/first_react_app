
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { increment,
         decrement,
         incrementAsync } from '../../redux/actions/count.js'

class Count extends Component {
  // 加法
  increment = ()=> {
    const {value} = this.selectNumber
    this.props.increment(value *1)

  }
  // 减法
  decrement = ()=> {
    const {value} = this.selectNumber
    this.props.decrement(value *1)

  }
  // 奇数加
  incrementIfOdd = ()=> {
    const {value} = this.selectNumber
    if (this.props.count % 2 !==0) {
      this.props.increment(value *1)
    }
  }

  //异步加
  incrementAsync = ()=> {
    const {value} = this.selectNumber
    this.props.incrementAsync(value *1,500)
  } 
  render() {
    return (
      <div>
        <h2>我是Count组件,下方组件总人数为:{this.props.persons}</h2>
        <h2>当前求和为：{this.props.count}</h2>
   
        <br />
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
           <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <br />
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state =>  ({
    count: state.count,
    persons:state.persons.length}),
  { increment,
    decrement,
    incrementAsync}
  )(Count)