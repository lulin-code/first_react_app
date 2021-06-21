/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css';

export default class List extends Component {
   // 初始化状态
  state = { 
    users: [], 
    isFirst:true,  //是否为第一次打开页面
    isLoading:false,  //是否处于加载中
    err:''  //存储请求相关的错误信息
   }
  componentDidMount(){
    PubSub.subscribe(`search`,(_,data)=> {
      this.setState(data)
    })
  }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className='row'>
        {
          isFirst ? <h2>欢迎使用,请输入关键字</h2> :
          isLoading ? <h2>加载中。。。。。。</h2> :
          err ? <h2 style={{color:'red'}}>err</h2> :
          users.map((userObj)=> {
          return(
            <div key={userObj.id} className="card">
								<a  href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
						</div>
          ) 
        })
      }
      
      </div>
    )
  }
}
