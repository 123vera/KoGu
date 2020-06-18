// 以下没用到
const express = require('express')
const next = require('next')

const PORT = process.env.PORT ||4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler();
console.log(next({dev}))
// next(opts: object)
// opts 的属性如下:

// dev (boolean) 判断 Next.js 应用是否在开发环境 - 默认false
// dir (string) Next 项目路径 - 默认'.'
// quiet (boolean) 是否隐藏包含服务端消息在内的错误信息 - 默认false
// conf (object) 与next.config.js的对象相同 - 默认{}
// 生产环境的话，可以更改 package.json 里的start脚本为NODE_ENV=production node server.js。


app.prepare()
    .then(()=>{
        const server = express();

        server.get("/api/users/create",(req,res)=>{
          console.log('000',res)
            return handle(req,res);
        })

        server.listen(PORT, err => {
            if(err) throw err;
            console.log(`> Ready on ${PORT}`);

        })
        .catch(ex => {
            console.error(ex.stack);
            process.exit(1);
        })
    })

  
console.log(PORT)
console.log(app)
