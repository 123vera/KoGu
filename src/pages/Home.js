import React, { Component } from 'react';
import Count from '../components/hook/ExampleCount'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from "axios";
import {Router} from 'react-router-dom'
// import Router from 'next/router'
import "../mock"
// import JsTool from './../components/common/JsTool'
import './home.scss'

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

  render (){
    console.log(Router.router && Router.router.pathname) 

    return (
      <div className='home'>
        <h2 onClick={() => Router.push('/viinet')}>HookHookHookHookHookHook</h2>
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
      </div>
    )
  }
}

export default Home