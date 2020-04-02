# Cookie

#### Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

- Domain 指定了 cookie 可以送达的主机名，如果没有指定，默认当前地址的主机部分（不包含子域名）。

> 像淘宝首页设置的 Domain 就是 .taobao.com，这样无论是 a.taobao.com 还是 b.taobao.com 都可以使用 Cookie。
>
> > 在这里注意的是，不能跨域设置 Cookie，比如阿里域名下的页面把 Domain 设置成百度是无效的：

- Path 指定了一个 URL，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。比如设置 Path=/docs，/docs/Web/ 下的资源会带 Cookie 首部，/test 则不会携带 Cookie 首部。

- Secure 属性。标记为 secure 的 Cookie 只应通过 Https 协议加密过的请求发送给服务端。 可以保护 cookies 浏览器和 web 服务器间的传输过程不被窃取和篡改

- SameSite，属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

  > SameSite 可以有下面三种值：(之前默认是 None 的，Chrome80 后默认是 Lax。)

  - Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。
  - Lax 允许部分第三方请求携带 Cookie
  - None 无论是否跨站都会发送 Cookie

- 从 None 改成 Lax 到底影响了哪些地方的 Cookies 的发送？直接来一个图表：
  ![ew](https://user-gold-cdn.xitu.io/2020/3/18/170eb95c97d98564?imageslim)

  ***

## 跨域和跨站

> 跨站和跨域是不同的

- 同源策略 ：同源是指两个 URL 的协议/主机名/端口一致，比如协议是 https，主机名是 www.taobao.com，端口是 443。
- 同站：只要两个 URL 的 eTLD+1（有效顶级域名） 相同即可，不需要考虑协议和端口。
  > - www.taobao.com 和 www.baidu.com 是跨站
  > - www.a.taobao.com 和 www.b.taobao.com 是同站，
  > - a.github.io 和 b.github.io 是跨站(注意是跨站)
