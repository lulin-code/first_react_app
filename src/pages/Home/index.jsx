import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route,Switch } from 'react-router-dom'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        	<ul className="nav nav-tabs">
							<li>
								<MyNavLink to="/home/news">News</MyNavLink>
							</li>
							<li>
								<MyNavLink to="/home/message">Message</MyNavLink>
							</li>
						</ul>
            <Switch>
              <Route path="/home/news" component={News}></Route>
              <Route path="/home/message" component={Message}></Route>
            </Switch>
      </div>
    )
  }
}
