import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      // 减少标签嵌套等级
      <Fragment>
        <input type="text" />
        <input type="text" />
      </Fragment>
    )
  }
}
