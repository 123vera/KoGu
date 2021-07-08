import React, { Component, useEffect, useState } from 'react';
import Count from '../../components/hook/ExampleCount'
import ExportExcel from '../../components/common/Excel'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from "axios";
import { downloadPdf } from './../../aseets/utils/pdf'
import { Router } from 'react-router-dom'
// import { Modal, Form, Input, Radio } from "antd";
// import Router from 'next/router'
import "../../mock"
import './home.scss'
import { convertToImage } from '../../aseets/utils/convertToImage';
import test1 from '../../aseets/imgs/test1.jpg';

// 如果你在beforePopState中返回 false，Router将不会执行popstate事件。
// Router.beforePopState(({ url, as, options }) => {
//   // I only want to allow these two routes!
//   if (as !== "/" || as !== "/other") {
//     // Have SSR render bad routes as a 404.
//     window.location.href = as
//     return false
//   }

//   return true
// });

// 监听页面dom 节点增删，节点样式改变等
function addObserverIfDesiredNodeAvailable(contents) {

  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver
  if (MutationObserver) {
    let waterImageNode = document.querySelector('#waterImageContent');

    if (!waterImageNode) {
      window.setTimeout(addObserverIfDesiredNodeAvailable, 500);
      return;
    }

    var observerOptions = {
      childList: true,  // 观察目标子节点的变化，是否有添加或者删除
      attributes: true, // 观察属性变动
      subtree: true     // 观察后代节点，默认为 false
    }

    const observer = new MutationObserver(function (list, observer) {
      let text = {
        userName: '王大王',
        tele: 888
      }

      if ((waterImageNode && !waterImageNode.getAttribute('style').includes('background-image')) || !waterImageNode) {

        // 避免一直触发
        observer.disconnect();
        observer = null
        createCanvasToUrl(JSON.parse(JSON.stringify(text)))
      }
    });

    observer.observe(waterImageNode, observerOptions);
  }
}

// 水印canvas 转为 base64图片地址
function createCanvasToUrl(contents) {
  let styles = {
    width: '150px',
    height: '150px',
    textAlign: 'center',
    textBaseline: 'middle',
    font: "10px microsoft yahei",
    fillStyle: 'rgba(184, 184, 184, 0.8)',
    rotate: '20',
    zIndex: 1000,
  }
  let { userName, tele } = contents

  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', styles.width);
  canvas.setAttribute('height', styles.height);
  var ctx = canvas.getContext("2d");

  ctx.textAlign = styles.textAlign
  ctx.textBaseline = styles.textBaseline
  ctx.font = styles.font;
  ctx.fillStyle = styles.fillStyle;
  ctx.rotate(Math.PI / 180 * styles.rotate);
  ctx.fillText(userName + tele, parseFloat(styles.width) / 3, parseFloat(styles.height) / 3);

  var base64Url = canvas.toDataURL();
  let waterImageNode = document.getElementById('waterImageContent');

  waterImageNode.setAttribute('style', `background-image: url("${base64Url}")`)
  addObserverIfDesiredNodeAvailable()
}

// 水印文字
function SetWaterImage() {

  let contents = {
    userName: '王大王',
    tele: 888
  }

  useEffect(() => {
    createCanvasToUrl(contents)

    addObserverIfDesiredNodeAvailable(contents)
  }, [document.getElementById('waterImageContent')])

  return (
    <div id="waterImageContent" >
      {/* <div className="waterImageContent" style={ { backgroundImage: 'url(' + createCanvasToUrl(contents) + ')' } }> */ }
      <ul>
        <li>第一步：准备水印文字（邮箱或用户名）</li>
        <li>第二步：文字转为canvas或svg</li>
        <li>第三步：用canvas 或svg 转为base64 图片</li>
        <li>第四步：以background-image插入base64 </li>

      </ul>
    </div>
  )
}

// dom转canvas 输出pdf 下载
function DomToPdf() {
  return (
    <div id='pdfContainer'>
      <ul>
        <li>第一步：定义容器id和内容</li>
        <li>第二步：安装jsPDF —— new jsPDF()</li>
      </ul>
      {/* <button onClick={ () => downloadPdf('888888', '文件2') }>下载</button> */ }
    </div >
  )
}

class Home extends Component {
  state = {
    imageEl: null,
    limitAmount: 10
  }

  componentDidMount() {
    return
    axios
      .get('/api/tags') //这列的'/api/tags'与mock.js文件里的地址一致
      .then(res => {
        //  console.log('323', JSON.stringify(res.data, null, 4))
      })

    axios
      .get(`/ api / users / create`) //这列的'/api/users/create'与mock.js文件里的地址一致
      .then(res => {
        console.log('22222323', res)
      })

    // Mock.mock( rurl, template )
    axios
      .get(`/ api / currentUser`) //这列的'/api/currentUser'与mock.js文件里的地址一致
      .then(res => {
        console.log('res', res)
      })
  }

  convert = () => {
    convertToImage(document.getElementById('homeContainer'), { backgroundColor: null, size: 0.8 }).then(res => {
      // convertToImage(document.getElementById('homeContainer'), {width: 100, height: 100,backgroundColor: null}).then(res => {
      this.setState({ imageEl: res.src })
    })
  }


  render() {
    console.log(Router.router && Router.router.pathname)  // 获取路由的方法

    return (
      <div className='home' id="home">
        <div id="homeContainer" >
          <button onClick={ () => downloadPdf('pdfContainer', '文件2') }>（必须位于顶部）下载pdf</button>

          <h2 onClick={ () => Router.push('/viinet') }>HookHookHookHookHookHook</h2>
          <br />
          <a href="weixin://" >打开微信l</a>

          <CopyToClipboard
            style={ { cursor: 'pointer' } }
            text={ '这是一段复制内容' }
            onCopy={ () => alert('複製成功') }
          >
            <span>{ '複製地址' }</span>
          </CopyToClipboard>

          <Count />

          <img className="testIng" src={ test1 } alt="" />

          {/* cdn图片不显示因为跨域问题，待研究 */ }
          {/* <img className="testIng" src="https://cdn.cnviinet.com/viinet-app-web-v2/static/linkafeiquan-202006101045.jpg" alt=""/>  */ }
        </div>

        {/* <div id="eee">
          <legend>—— 这里是顶部 ——</legend>
          <button onClick={ this.convert }>下载图片</button>
          <br />
        </div> */}

        <div>

          {/* 以下解决的问题是：dom转化为canvas ，再转为图片，并下载或保存，主要方法在 utils/convertToImage 文件*/ }
          <fieldset  >
            <div >
              <legend>—— 下载图片 ——</legend>
              <button onClick={ this.convert }>下载图片</button>
              <br />
              {/* <img src={ this.state.imageEl } alt="" /> */ }
            </div>

          </fieldset>


          {/* 实现水印 */ }
          <fieldset>
            <legend>—— 实现删不掉的水印 ——</legend>
            <SetWaterImage />
          </fieldset>


          {/* dom转pdf下载 */ }
          <fieldset>
            <legend>—— dom转pdf下载 ——</legend>
            <DomToPdf />
          </fieldset>

          {/* 下载excel */ }
          <fieldset>
            <legend>——下载excel  ——</legend>
            <ExportExcel />
          </fieldset>

        </div>
      </div >
    )
  }
}

export default Home