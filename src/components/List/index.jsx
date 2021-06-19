/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './index.css';

export default class List extends Component {
  render() {
    return (
      <div>
       <div className="card">
								<a  href="https://github.com/reactjs" target="_blank">
									<img alt="head_portrait" style={{width:'100px'}}/>
								</a>
								<p className="card-text">123</p>
							</div>
      </div>
    )
  }
}
