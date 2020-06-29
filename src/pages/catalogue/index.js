import React from 'react'
import './index.scss'

export default function index(){
  return (
    <div className="catalogue">
      <h1>目录</h1>
      <div className="container">
        <a href="/index">dom转图片(插件DomToImage.js)</a>
        <a href="/hook">React-hook应用</a>
        <a href="/home">mock模拟请求数据、dom转图片（网易云音乐团队推荐方法： html2canvas + canvas2image）</a>
        <a href="/htmlTag">一些少用的html标签</a>
        <a href="/inputItem">一些少用的表单元素</a>
        <a href="/animate">css动画</a>
        <a href="/line">threejs - 模拟线</a>
        <a href="/axis">threejs 一些尝试1</a>
        <a href="/curve">threejs 一些尝试2</a>
        <a href="/inter">算法题</a>
    </div>
  </div>
  )
}

