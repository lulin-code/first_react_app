/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './index.css';

export default class List extends Component {
  render() {
    const {users} = this.props
    return (
      <div className='row'>
        {
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
