# Cookie

#### Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。

- Domain 指定了 cookie 可以送达的主机名，如果没有指定，默认当前地址的主机部分（不包含子域名）。

> 像淘宝首页设置的 Domain 就是 .taobao.com，这样无论是 a.taobao.com 还是 b.taobao.com 都可以使用 Cookie。
>
> > 在这里注意的是，不能跨域设置 Cookie，比如阿里域名下的页面把 Domain 设置成百度是无效的：

- Path 指定了一个 URL，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部。比如设置 Path=/docs，/docs/Web/ 下的资源会带 Cookie 首部，/test 则不会携带 Cookie 首部。

- Secure 属性。标记为 secure 的 Cookie 只应通过 Https 协议加密过的请求发送给服务端。 可以保护 cookies 浏览器和 web 服务器间的传输过程不被窃取和篡改

- SameSite 属性，可以允许在跨站请求时 不携带 cookie
