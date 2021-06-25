import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  // 加法
  increment = ()=> {
    const {value} = this.selectNumber
    store.dispatch({type:'increment',data:parseInt(value)})
  }
  // 减法
  decrement = ()=> {
    const {value} = this.selectNumber
    store.dispatch({type:'decrement',data:parseInt(value)})
  }
  // 奇数加
  incrementIfOdd = ()=> {
    const {value} = this.selectNumber
    const count = store.getState()
    console.log(count)
    if (count % 2 !== 0) {
      store.dispatch({type:'increment',data:value *1})
    }
  }

  //异步加
  incrementAsync = ()=> {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch({type:'increment',data:parseInt(value)})
    }, 500);
  } 
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
