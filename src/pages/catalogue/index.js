import React from 'react'
import './index.scss'

export default function index() {
  return (
    <div className="catalogue" >
      <h1> 目录 </h1>
      <div className="container" >
        <span>CSS && HTML</span>
        <a target="_blank" href="/htmlTag" > 不常用的html标签 </a>
        <a target="_blank" href="/inputItem" > 不常用的表单元素 </a>
        <a target="_blank" href="/worldArea" > 世界国家城市联动 </a>
        <a target="_blank" href="/css" > 不常用的CSS属性 </a>
        <a target="_blank" href="/scrollreveal" > scrollreveal 双向滚动页面 动画加载</a>

        <br/>
        <span>THREEJS</span>
        <a target="_blank" href="/interLine" > threejs - demo </a>
        <a target="_blank" href="/line" > threejs - 模拟线 </a>
        <a target="_blank" href="/curve" > threejs 一些尝试 </a>

        <br/>
        <span>JS</span>
        <a target="_blank" href="/cloneDeep" > 深拷贝和浅拷贝 </a>
        <a target="_blank" href="/js" > javascript练习 </a>
        <a target="_blank" href="/inter" > 算法题 </a>
        <a target="_blank" href="/es11" > ES11 </a>
        <a target="_blank" href="/react-senior" > React高级 </a>
        <a target="_blank" href="/react-source" > React源码 </a>
        <a target="_blank" href="/hook" > React - hook应用 </a>
        <a target="_blank" href="/index" > dom转图片(插件DomToImage.js) </a>
        <a target="_blank" href="/home" > mock模拟请求数据、 dom转图片（ 网易云音乐团队推荐方法： html2canvas + canvas2image） </a>



      </div>
    </div>
  )
}