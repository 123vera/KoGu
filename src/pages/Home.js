import React, { Component, Fragment } from 'react';
import Count from '../components/hook/ExampleCount'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from "axios";
import {Router} from 'react-router-dom'
// import Router from 'next/router'
import "../mock"
// import JsTool from './../components/common/JsTool'
import './home.scss'
import { convertToImage } from '../aseets/utils/convertToImage';
import test1 from '../aseets/imgs/test1.jpg';

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

class Home extends Component {
  state={
    imageEl: null
  }

  componentDidMount(){
    axios
    .get('/api/tags') //这列的'/api/tags'与mock.js文件里的地址一致
    .then(res=>{
          //  console.log('323', JSON.stringify(res.data, null, 4))
    })

    axios
    .get(`/api/users/create`) //这列的'/api/users/create'与mock.js文件里的地址一致
    .then(res=>{
        console.log('22222323', res)
    })

    // Mock.mock( rurl, template )
    axios
    .get(`/api/currentUser`) //这列的'/api/currentUser'与mock.js文件里的地址一致
    .then(res=>{
        console.log('res', res)
    })
  }

  convert = () => {
    convertToImage(document.getElementById('homeContainer'), {backgroundColor: null}).then(res => {
    // convertToImage(document.getElementById('homeContainer'), {width: 100, height: 100,backgroundColor: null}).then(res => {
      this.setState({ imageEl: res.src })
    })
  }

  render (){
    console.log(Router.router && Router.router.pathname)  // 获取路由的方法

    return (
      <div className='home'>

      <div id="homeContainer" > 
        <h2 onClick={() => Router.push('/viinet')}>HookHookHookHookHookHook</h2>
        <br/>
        <a href="weixin://" >打开微信l</a> 
       
        <CopyToClipboard
            style={{ cursor: 'pointer' }}
            text={'这是一段复制内容'}
            onCopy={() => alert('複製成功')}
          >
            <span>{'複製地址'}</span>
          </CopyToClipboard> 
        {/* <JsTool/> */}

        <Count/>

        <img className="testIng" src={test1} alt=""/>  

        {/* cdn图片不显示因为跨域问题，待研究 */}
        {/* <img className="testIng" src="https://cdn.cnviinet.com/viinet-app-web-v2/static/linkafeiquan-202006101045.jpg" alt=""/>  */}
       </div>


        {/* 以下解决的问题是：dom转化为canvas ，再转为图片，并下载或保存，主要方法在 utils/convertToImage 文件*/}
        <button onClick={this.convert}>下载图片</button>
        <br/>
        <img src={this.state.imageEl} alt=""/>
      </div>  
     
    )
  }
}

export default Home