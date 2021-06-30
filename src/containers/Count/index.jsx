// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createIncrementAction,
         createIncrementAsyncAction,
         createDecrementAction } from '../../redux/count_action'

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state =>  ({count: state}),
  { jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync: createIncrementAsyncAction}
  )(CountUI)