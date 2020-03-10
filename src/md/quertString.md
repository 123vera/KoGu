# QueryString(查询字符串)

## 引入 const querystring = require("querystring");

- quertstring.parse(str,separator,eq,options)
- parse 这个方法是将一个字符串反序列化为一个对象。

  > quertstring.parse('name=vera&sex=man&sex=women')

  ```
  输出： { name: 'vera', sex: ['man', 'women' ] }
  ```

  > querystring.parse('name=vera#sex=man#sex=women', '#', null, { maxKeys:2 })

  ```
  输出：{ name: 'vera', sex: 'man' }
  ```

---

- querystring.stringify(obj,separator,eq,options)
- stringify 这个方法是将一个对象序列化成一个字符串，与 querystring.parse 相对。

  > querystring.stringify({name:'vera', sex:[ 'man', 'women' ]})

  ```
  输出： 'name=vera&sex=man&sex=women'
  ```

  > querystring.stringify({name: 'vera', sex:[ 'man', 'women' ] , "\*","\$"})

  ```
  输出： 'name$whitemu*sex$man*sex$women'
  ```

---

- querystring.escape(str)
- escape 可使传入的字符串进行编码
  > querystring.escape("name=慕白");
  ```
  输出：'name%3D%E6%85%95%E7%99%BD'
  ```

---

- querystring.unescape(str)
- unescape 方法可将含有%的字符串进行解码
  > querystring.unescape('name%3D%E6%85%95%E7%99%BD');
  ```
  输出：'name=慕白'
  ```
