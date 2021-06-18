import React, { Component } from 'react';
import './index.css'
class Item extends Component {
  state = {mouse:false}
  handleMouse = (flag) => {
    return ()=> {
      this.setState({mouse:flag})
    }
  }
  render() {
    const {name,done} = this.props
    const {mouse} = this.state;
    return (
      <div>
          <li style = {{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
              <input type="checkbox" defaultChecked= {done}/>
              <span>{name}</span>
            </label>
            <button className = "btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
          </li>
      </div>
    );
  }
}

export default Item;