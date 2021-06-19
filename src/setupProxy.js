/*
 * @Author: your name
 * @Date: 2021-06-19 16:38:27
 * @LastEditTime: 2021-06-19 17:13:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /first_react_app/src/setupProxy.js
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', { //遇见/api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000', //请求转发给谁
      changeOrigin: true,//控制服务器收到的请求头中Host的值
      pathRewrite: { '^/api1': '' } //重写请求路径(必须)
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    }),
  )
}
