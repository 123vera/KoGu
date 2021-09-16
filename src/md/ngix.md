## Ngix

> 0、用 ngix 能干嘛

- qtt 项目 中，主要使用 nginx 做反向代理

- Nginx 开启 gzip 网页压缩（更小的网页体积也就意味着带宽的节约和传输速度的提升，特别是对于访问量巨大大型网站，带来可观的流量与带宽的节省）
- Nginx 跨域（使用反向代理解决跨越）、负载均衡（将请求分发到指定的服务器上处理）、静态服务器
  - 前后端分离部署中的跨域问题。因为前后端在开发过程中分别都需要各自的端口来运行，所以 2 个端口造成了跨域
- 它的横向对比： 作为 webserver 服务器，Nginx 可与 Apache 进行对比

> 0、使用 nginx 来部署前后端分离项目

- 首先 安装 nginx。若本地项目的本地服务，则安装到本地；若真正要部署到线上服务器的话，就需要在公司的服务器上安装 Nginx 来实现前端项目的部署工作
- 本地电脑环境： MAC OS
- 怎么安装（<a href='https://juejin.cn/post/6844904096973979662' target="_blank"> Mac 系统下 nginx 的安装</a>）
- 开始——前端项目打包 build
- Nginx 部署项目：将打包好的项目放入到 Nginx 的 html 目录下，命令行在 Finder 打开 html 目录
  ```
  open /usr/local/Cellar/nginx/1.17.8/
  ```
  然后将 build 文件 拖到 html 中就可以了
- 修改 Nginx 配置文件

  - 端口号为 9200

  - 服务名称为 localhost

  - root 目录为 html

  - location 地址为 /admin

  - 处理前台路由 history 模式刷新 404 的问题

  ```
  http {
  server {
       # 监听的端口号
       listen       9200;

       # 服务名称 生产环境要修改成 公网ip 如 47.105.134.120
       server_name  localhost;

       # 配置根目录的地址是以 nginx 下的 html 文件夹为根目录来查找的
       root html;

       # 配置默认的主页显示 比如 47.105.134.120:8080 显示的 index 页面
       location / {
           try_files $uri $uri/ /index.html;
       }
       # 配置我们的 admin 的前台服务 比如 47.105.134.120:8080/admin/index.html
       location ^~ /admin {
           # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
           try_files $uri $uri/ /admin/index.html;
       }
       # 如果你想配置多个项目的话，可以复制上面的，修改一下就可以同时部署多个前端项目了
       # 比如
       # location ^~ /blog {
           # 处理 Vue 单页面应用 路由模式为 history 模式刷新页面 404 的问题
           # try_files $uri $uri/ /blog/index.html;
       # }
       #error_page  404              /404.html;

       # redirect server error pages to the static page /50x.html
       #
       error_page   500 502 503 504  /50x.html;
       location = /50x.html {
           root   html;
       }
   }

   include servers/*;
  }
  ```

- 启动 Nginx 访问项目 —— 修改完成后，使用 Nginx 命令来启动 Nginx 服务
  ```
  cd /usr/local/Cellar/nginx/1.17.8/bin/
  nginx -s reload
  ```
  执行后没有提示就成功了， 浏览器访问 http://localhost:9200/index

> 1、基本配置示例

```

user nginx; # 默认设置，一般无需配置
worker_processes; 1 # Nginx 进程数， 一般设置为与 CPU 核数

event {
use epoll; # 指定轮询方法（使用 epoll 的 I/O 模型）
worker_connections; # 最大进程允许的最大并发数
}

# 以下使用最频繁，代理、缓存、日志定义等绝大数功能和第三方模块在这里设置

http {

    sendfile  on;                  # 开启高效传输模式
    keepalive_timeout   65;        # 超时时间，单位秒

    server {
        listen  8080;              # 监听的域名
        server_name  localhost     # 配置的路由

        location / {
             root     /usr/share/nginx/html;   # 网站根目录
             index    index.html index.htm;    # 默认首页文件
             deny 172.168.22.11;               # 禁止访问的ip，可以all
             allow 172.168.33.44;              # 允许访问的ip，可以all

             if ($request_method = 'POST') {}
             if ($request_method = 'GET') {}
        }

        error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页
        error_page 400 404 error.html;         # 默认40x对应的访问页
    }

}

```

- 简单的说，一般给客户端做代理的都是正向代理，给服务器做代理的就是反向代理
- server 块可以包含多个 localhost，localhost 指令用于匹配 uri

> 2、常用全局变量

| 全局变量名        | 功能                                          |
| ----------------- | --------------------------------------------- |
| \$host            | 请求信息中的 host，如果请求中没有，则等于设置 |
| \$request_method  | 客户端请求类型，如 GET、POST、 OPTIONS        |
| \$remote_addr     | 客户端 ip 地址                                |
| \$remote_port     | 客户端 端口号                                 |
| \$args            | 请求参数                                      |
| \$http_cookie     | 客户端的 cookies 信息                         |
| \$server_protocol | 请求使用的协议，如 HTTP1.1、HTTP2             |
| \$server_addr     | 服务器地址                                    |
| \$server_name     | 服务器名称                                    |
| \$server_port     | 服务器端口号                                  |
| \$scheme          | 协议名（http、https）                         |

- 还有更多的内置预定义变量，可以直接搜索关键字「nginx 内置预定义变量」可以看到一堆博客写这个，这些变量都可以在配置文件中直接使用
- 当浏览器在访问跨源的服务器时，也可以在跨域的服务器上直接设置 Nginx，从而前端就可以无感地开发，不用把实际上访问后端的地址改成前端服务的地址，这样可适性更高。

> 3、 解决问题——跨域

- 比如前端站点是 fe.sherlocked93.club，这个地址下的前端页面请求 be.sherlocked93.club 下的资源，比如前者的 fe.sherlocked93.club/index.html 内容是这样的：

```

xmlhttp.open("GET", "http://be.sherlocked93.club/index.html", true);

```

- 打开浏览器访问 fe.sherlocked93.club/index.html 的结果会出现跨越，在 fe.sherlocked93.club 的 html 页面访问就会出现跨域

- 解决办法：在 /etc/nginx/conf.d/ 文件夹中新建一个配置文件（如下），对应二级域名 be.sherlocked93.club ：

文件位置 —— /etc/nginx/conf.d/be.sherlocked93.club.conf

    server {
    listen 80;
    server_name be.sherlocked93.club;

            add_header 'Access-Control-Allow-Origin' $http_origin;   # 全局变量获得当前请求origin，带cookie的请求不支持*
            add_header 'Access-Control-Allow-Credentials' 'true';    # 为 true 可带上 cookie
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';  # 允许请求方法
            add_header 'Access-Control-Allow-Headers' $http_access_control_request_headers;  # 允许请求的 header，可以为 *
            add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

        if (\$request_method = 'OPTIONS') {
            add_header 'Access-Control-Max-Age' 1728000; # OPTIONS 请求的有效期，在有效期内不用发出另一条预检请求
            add_header 'Content-Type' 'text/plain; charset=utf-8';
            add_header 'Content-Length' 0;

            return 204; # 200 也可以
        }

            location / {
                root  /usr/share/nginx/html/be;
                index index.html;
            }
    }

- 然后 nginx -s reload 重新加载配置。这时再访问 fe.sherlocked93.club/index.html 结果如下，请求中出现了我们刚刚配置的 Header
- 解决了跨域问题

> 4、解决问题—— Nginx 配置 gzip

- 使用 gzip 不仅需要 Nginx 配置，浏览器端也需要配合，需要在请求消息头中包含 <font color='yellow'>Accept-Encoding: gzip</font> (（IE5 之后所有的浏览器都支持了，是现代浏览器的默认设置）)
- 过程：首先浏览器请求 html+css 静态资源时一般会在请求头 加上<font color='yellow'>Accept-Encoding: gzip</font>, 告诉服务器自己支持的压缩方式，nginx 接收到这个请求时，如果有相应配置，就会返回经过 gzip 压缩过的文件给浏览器，会在 response 相应的时候加上 <font color='#ff502c'>content-encoding: gzip</font>来告诉浏览器自己支持的压缩方式（一般支持好几种），浏览器拿到压缩的文件后，根据自己的解压方式进行解析
- 怎么配置

- 和之前一样，为方便管理，还是在 /etc/nginx/conf.d/ 文件夹中新建配置文件 gzip.conf ：（/etc/nginx/conf.d/gzip.conf）

```

gzip on; # 默认 off，是否开启 gzip
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;

# 上面两个开启基本就能跑起了，下面的愿意折腾就了解一下

gzip_static on;
gzip_proxied any;
gzip_vary on;
gzip_comp_level 6;
gzip_buffers 16 8k;

gzip_min_length 1k; # 最好设置低于 1kb 的文件就不要 gzip 压缩了,否则压缩后体积变大

gzip_http_version 1.1;

```

这个配置可以插入到 http 模块整个服务器的配置里，也可以插入到需要使用的虚拟主机的 server 或者下面的 location 模块中，当然像上面我们这样写的话就是被 include 到 http 模块中了

- 稍微解释一下：

- gzip_types：要采用 gzip 压缩的 MIME 文件类型，其中 text/html 被系统强制启用；
- gzip_static：默认 off，该模块启用后，Nginx 首先检查是否存在请求静态文件的 gz 结尾的文件，如果有则直接返回该 .gz 文件内容；
- gzip_proxied：默认 off，nginx 做为反向代理时启用，用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩；
- gzip_vary：用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；
- gzip_comp_level：gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；
- gzip_buffers：获取多少内存用于缓存压缩结果，16 8k 表示以 8k\*16 为单位获得；
- gzip_min_length：允许压缩的页面最小字节数，页面字节数从 header 头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；
- gzip_http_version：默认 1.1，启用 gzip 所需的 HTTP 最低版本；

- 那么为啥这里 Nginx 已经有了 gzip 压缩，Webpack 这里又整了个 gzip 呢，<u> 因为如果全都是使用 Nginx 来压缩文件，会耗费服务器的计算资源，如果服务器的 gzip_comp_level 配置的比较高，就更增加服务器的开销，相应增加客户端的请求时间，得不偿失</u>。
  如果前端压缩后的文件传至服务器，nginx 在查找时优先找到这些压缩后的文件返回给客户端，节约了服务器资源， <font color='#f58505'> 所以一般推荐在生产环境应用 webpack 配置的 gzip 压缩</font>

> 5、解决问题 —— 配置负载均衡

- 把负载均匀合理地分发到多个服务器上，实现压力分流的目的

```

http {
upstream myserver { # ip_hash; # ip_hash 方式 # fair; # fair 方式
server 127.0.0.1:8081; # 负载均衡目的服务地址
server 127.0.0.1:8080;
server 127.0.0.1:8082 weight=10; # weight 方式，不写默认为 1
}

server {
location / {
proxy_pass http://myserver;
proxy_connect_timeout 10;
}
}
}

```

Nginx 提供了好几种分配方式，默认为轮询，就是轮流来。有以下几种分配方式：

- 轮询，默认方式，每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务挂了，能自动剔除；
- weight，权重分配，指定轮询几率，权重越高，在被访问的概率越大，用于后端服务器性能不均的情况；
- ip_hash，每个请求按访问 IP 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决动态网页 session 共享问题。负载均衡每次请求都会重新定位到服务器集群中的某一个，那么已经登录某一个服务器的用户再重新定位到另一个服务器，其登录信息将会丢失，这样显然是不妥的；
- fair（第三方），按后端服务器的响应时间分配，响应时间短的优先分配，依赖第三方插件 nginx-upstream-fair，需要先安装；

> 6、适配 PC 或移动设备

- 根据用户请求的站点 user-agent 判断是 pc 还是 h5，nginx 配置 2 套入口，根据用户设备不同返回不同样式的站点，比如我们常见的淘宝、京东......这些大型网站就都没有采用自适应，而是用分开制作的方式
- 方式：

- 首先在 /usr/share/nginx/html 文件夹下 mkdir 分别新建两个文件夹 PC 和 mobile，vim 编辑两个 index.html 随便写点内容。

```

    cd /usr/share/nginx/html
    mkdir pc mobile
    cd pc
    vim index.html   # 随便写点比如 hello pc!
    cd ../mobile
    vim index.html   # 随便写点比如 hello mobile!

```

- 然后和设置二级域名虚拟主机时候一样，去 /etc/nginx/conf.d 文件夹下新建一个配置文件 fe.sherlocked93.club.conf ：

  ```
  # /etc/nginx/conf.d/fe.sherlocked93.club.conf

  server {
  listen 80;
      server_name fe.sherlocked93.club;

      location / {
          root  /usr/share/nginx/html/pc;
      if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
      root /usr/share/nginx/html/mobile;
      }
          index index.html;
      }
  }

  ```

配置基本没什么不一样的，主要多了一个 if 语句，然后使用 \$http_user_agent 全局变量来判断用户请求的 user-agent，指向不同的 root 路径，返回对应站点。

- 可以看到在模拟使用移动端访问的时候，Nginx 返回的站点变成了移动端对应的 html 了。

> 一些常用技巧

- 图片防盗链

```

server {
listen 80;
server_name \*.sherlocked93.club;

# 图片防盗链

location ~_ \.(gif|jpg|jpeg|png|bmp|swf)\$ {
valid_referers none blocked server_names ~\.google\. ~\.baidu\. _.qq.com; # 只允许本机 IP 外链引用，感谢 @木法传 的提醒，将百度和谷歌也加入白名单
    if (\$invalid_referer){
        return 403;
    }
 }
}

```

   - 请求过滤

```

# 非指定请求全返回 403

if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
return 403;
}

location / {

# IP 访问限制（只允许 IP 是 192.168.0.2 机器访问）

allow 192.168.0.2;
deny all;

root html;
index index.html index.htm;
}

```

- 配置图片、字体等静态文件缓存
- ，所以缓存可以设置的长一点，先设置强制缓存，再设置协商缓存；如果存在没有 hash 值的静态文件，建议不设置强制缓存，仅通过协商缓存判断是否需要使用缓存

```

# 图片缓存时间设置

location ~ .\*\.(css|js|jpg|png|gif|swf|woff|woff2|eot|svg|ttf|otf|mp3|m4a|aac|txt)\$ {
expires 10d;
}

# 如果不希望缓存

expires -1;

```

- 单页面项目 history 路由配置

```

server {
listen 80;
server_name fe.sherlocked93.club;

location / {
root /usr/share/nginx/html/dist; # vue 打包后的文件夹
index index.html index.htm;
try_files $uri $uri/ /index.html @rewrites;

    expires -1;                          # 首页一般没有强制缓存
    add_header Cache-Control no-cache;

}

# 接口转发，如果需要的话

#location ~ ^/api {

# proxy_pass http://be.sherlocked93.club;

#}

location @rewrites {
rewrite ^(.+)\$ /index.html break;
}
}

```

- HTTP 请求转发到 HTTPS
  - 配置完 HTTPS 后，浏览器还是可以访问 HTTP 的地址 http://sherlocked93.club/ 的，可以做一个 301 跳转，把对应域名的 HTTP 请求重定向到 HTTPS 上

```

server {
listen 80;
server_name www.sherlocked93.club;

    # 单域名重定向
    if ($host = 'www.sherlocked93.club'){
        return 301 https://www.sherlocked93.club$request_uri;
    }
    # 全局非 https 协议时重定向
    if ($scheme != 'https') {
        return 301 https://$server_name$request_uri;
    }

    # 或者全部重定向
    return 301 https://$server_name$request_uri;

    # 以上配置选择自己需要的即可，不用全部加

}

```

> 7、参考地址

| 文章名                         | 地址                                       |
| ------------------------------ | ------------------------------------------ |
| Nginx 从入门到实践，万字详解！ | https://juejin.cn/post/6844904144235413512 |

