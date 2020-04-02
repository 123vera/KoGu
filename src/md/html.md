# HTML

## document.title

- 当前网页的网页名称，可更改，document.title = XXX;

## 语义字符

- `&hellip;` | &hellip;
- `&lt;` | &lt;
- `&gt;` | &gt;

## a 锚链接

同一个页面不同部分的跳转:

- 目标元素：`<p id="test"></p>`
- 锚点超链接：`<a href="#test"></a>`

不同页面跳转，同时存在锚点:

- 目标元素：a.html 页面的`<div id="test"/>`
- 锚点超链接：`<a href="a.html#test"></a>`

不同页面带参数跳转，同时存在锚点:

- 目标元素：a.php?p=abc 页面的`<div id="test"/>`
- 锚点超链接：`<a href="a.php?p=abc#test"></a>`

---

## document.baseURI

- 一个文档的基本 URL, 可以通过使用 document.baseURI 的 JS 脚本查询

- 默认 document.baseURI = document.location.href ， 如百度：均为 https://www.baidu.com/

---

## HTML`<base>`

- 作用:base 规定的是页面上所有链接的默认 URL，是所有！ 其包括 src，href 等所有 URL
- `<base>` 标签必须位于 `<head>` 元素内部。
- 在一个文档中，最多能使用一个 `<base>` 标签
- 使用了`<base>`标签的链接后，其他链接必须在`<base>`标签的链接里面，不然将无法找到

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>base</title>
    <meta charset="UTF-8">
    <base href="http://www.w3cschool.cn"  target="_blank">
</head>
<body>
<p>img标签里的src的绝对路径是http://www.w3cschool.cn/statics/images/course/planets.gif</p>
<img src="/statics/images/course/planets.gif" width="145" height="126" alt="Planets">
</body>
</html>

```

---

## HTML `<bdo>` & `<bdi>`

- bdi 指的是 bidi 隔离。
- bdi chrome 中无效，官方目前只对 firefox chrome 支持
- 如果你想改变文字的方向,可以使用<bdo>，神奇的是！你复制它则会是正序

  `<bdo dir='rtl'>13232</bdo>` 输出 23231

  `<bdo dir='ltr'>13232</bdo>` 输出 13232

  `<bdo>13232</bdo>` 输出 13232，默认 auto

---

## HTML `<data>`

- 元素将一个指定内容和机器可读的翻译联系在一起。但是，如果内容是与时间或者日期相关的，则一定要使用 `<time>`。

`<p><data value="398">迷你番茄酱</data></p>`

---

## HTML `<datalist>`

- 包含了一组`<option>`元素，这些元素可选值.

```
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

```

---

## HTML `<details>`

- 详细信息展现元素， （下拉菜单）
- 搭配 summary 使用，可代替一段 js。 效果： 点击‘挂件的 title’，展示下拉选项‘挂件展开的内容’

```
 <details>
     <summary>挂件的title</summary>
     挂件展开的内容
 </details>
```

---

## HTML `<figure>`

- 这个标签经常是在主文中引用的图片，插图，表格，代码段等等
- figure 外层标签， figcaption 下方显示标题

```
<figure>
    <img src="/media/examples/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```
