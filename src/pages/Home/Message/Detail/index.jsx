import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const DetailData = [
      	{id:'01',content:'你好，中国'},
        {id:'02',content:'你好，尚硅谷'},
        {id:'03',content:'你好，未来的自己'}
    ]
    const {id,title} = this.props.match.params
    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Det:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
