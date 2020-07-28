import React from 'react'
import './index.scss'

export default function index(){
  return (
    <div className="catalogue">
      <h1>目录</h1>
      <div className="container">
        <a target="_blank" href="/index">dom转图片(插件DomToImage.js)</a>
        <a target="_blank" href="/hook">React-hook应用</a>
        <a target="_blank" href="/react-source">React源码</a>
        <a target="_blank" href="/react-senior">React高级</a>
        <a target="_blank" href="/es11">ES11</a>
        <a target="_blank" href="/home">mock模拟请求数据、dom转图片（网易云音乐团队推荐方法： html2canvas + canvas2image）</a>
        <a target="_blank" href="/htmlTag">一些少用的html标签</a>
        <a target="_blank" href="/inputItem">一些少用的表单元素</a>
        <a target="_blank" href="/animate">css动画</a>
        <a target="_blank" href="/interLine">threejs - demo</a>
        <a target="_blank" href="/line">threejs - 模拟线</a>
        <a target="_blank" href="/axis">threejs 一些尝试1</a>
        <a target="_blank" href="/curve">threejs 一些尝试2</a>
        <a target="_blank" href="/inter">算法题</a>
    </div>
  </div>
  )
}

