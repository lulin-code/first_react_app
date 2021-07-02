/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 类组件
// export default class Demo extends Component {
//   state = {count:0}
//   add = ()=> {
//     this.setState((state)=> ({count:state.count + 1}))
//   }
//   render() {
//     return (
//       <div>
//         <h2>当前求和为{this.state.count}</h2>
// 				<button onClick={this.add}>点我+1</button>
//       </div>
//     )
//   }
// }

function Demo() {
  const [count,setCount] = React.useState(0)
  const [name,setName] = React.useState('JIKE')
  const myRef = React.useRef()
  React.useEffect(()=>{
  let time = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return ()=> {
      clearTimeout(time)
    }
  },[])
  const add = () => {
    setCount(count + 1)
  }
  const changeName =()=> {
    setName('make')
  }
  const unmount = ()=> {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  const show = ()=> {
    alert(myRef.current.value)
  }
  return(
     <div>
      <h2>当前求和为{count}</h2>
      <h2>我的名字是{name}</h2>
      <input type="text" ref={myRef}/>
			<button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
     </div>
  )
}

export default Demo
