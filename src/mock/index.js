import mockjs from 'mockjs';
// import { delay } from 'roadhog-api-doc';  // 需要添加所有的请求延迟的时候， 可以通过第三方插件来简化这个问题


// 当客户端（浏览器）发送请求，如：GET /api/users，
// 那么本地启动的 umi dev 会跟此配置文件匹配请求路径以及方法，
// 如果匹配到了，就会将请求通过配置处理，就可以像样例一样，
// 你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。

// 以下真假切换接口

// if (process.env.NODE_ENV === 'development') {
//   require('./src/mock')
// }

// let postApi = (path, mock) => {
//   // 当为0的时候
//   return path + (mock ? '' : '.mock'); // '/todoList.mock'
// };

// export default {
//   "newsList": postApi("/api/order/news"),
//   "newsList2": postApi("/api/newsList2"),
//   "todoList": postApi("/todoList", 0)  // postApi方法接收两个参数，接口地址及是否需要mock数据，0需要，1不需要
// }

// 以上真假切换接口

const getNotice =  (req, res) => { res.end('OK'); }

 const proxy = {
  // Mock.mock( rurl, template )
  'GET /api/currentUser': mockjs.mock( '',{
    'code': 0,
    'data': {
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            'title': '前端人人@id',
            'status': 1
        }]
    },
    'message': '操作成功',
    'systemDate': new Date().getTime()
  }),

  // 使用 mockjs 等三方库   Mock.mock( rurl, rtype, template )
  'GET /api/tags': mockjs.mock('/api/tags', 'get', {
    'list|100': [{ name: '@city', 'value|1-10': 50, 'type|0-2': 1 }],
  }),

  // 添加跨域请求头 Mock.mock( rurl, rtype, function( options ) )
  '/api/users/create': mockjs.mock('/api/users/create', (req, res) => {
    // 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。
    mockjs.setup({
      timeout: 400 
    })
    // res.setHeader('Access-Control-Allow-Origin', '*');
    return { users: [1, 2] } // 直接输出res.data = { users: [1, 2] }
  
  }),

   // 支持制定执行回调
  'GET /api/project/notice': getNotice,

   // 支持值为 Object 和 Array
   'GET /api/users': { users: [1, 2] },


   // 静态 Mock 数据
  '/api/random': mockjs.mock({
    // 只随机一次
    'number|1-100': 100,
  }),

  // 动态 Mock 数据
   '/api/randoms': (req, res) => {
    res.send(mockjs.mock({
      // 每次请求均产生随机值
      'number|1-100': 100,
    }))
  },
};



export default proxy



// 调用 delay 函数，统一处理
// export default delay(proxy, 1000) 