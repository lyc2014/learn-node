/**
 * server.timeout
 * 认定套接字超时的不活动毫秒数
 * 
 * server.setTimeout([msecs][,callback])
 * 设置套接字的超时值，并在服务器对象上出发'timeout'事件,如果发生超时，则将套接字作为参数传入。
 * 
 * 自我总结： 1、setTimeout 是 on('timeout')的另一种写法
 *           2、设置server.timeout较低，如果有使用 on('timeout'), 即使超时了 也不会关闭 socket
 */

const http = require('http')

const server = http.createServer()
server.on('request', function (req, res) {
  setTimeout(function () {
    res.end('hello world')
  }, 10 * 1000)
})
// on('timeout') with server.timeout set
// server.on('timeout', function () {
//   console.log('server timeout: ')
// })
// server.timeout = 5000

//  setTimeout() and server.timeout set
// server.setTimeout(1000, function () {
//   console.log('setTimeout')
// })
// server.timeout = 5 * 1000

server.listen('3000', function() {
  console.log('the server is running...')
})