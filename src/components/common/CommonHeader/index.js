import React, { Component } from 'react';
import './index.scss'

class Index extends Component{
  render(){
    return(
      <div id="common-header">
        <header>
          <img src="https://cdn.cnviinet.com/viinet-web/static/Logotitle-202004262026.png" alt=""/>
          <ul>
            <li>首页</li>
            <li>关于我们</li>
            <li>产品与服务力</li>
            <li>影响力</li>
            <li>商业蓝图</li>
            <li>APP下载</li>
            <li>English</li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Index