import React, { Component } from 'react';
import Count from './../components/hook/ExampleCount'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import axios from "axios";
import "../mock"
// import JsTool from './../components/common/JsTool'
import './Home.scss'

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
    return (
      <div className='home'>
       <CopyToClipboard
            style={{ cursor: 'pointer' }}
            text={'这是一段复制内容'}
            onCopy={() => alert('複製成功')}
          >
            <span>{'複製地址'}</span>
          </CopyToClipboard> 
        {/* <JsTool/> */}
        <h2>Hook</h2>
        <Count/>
      </div>
    )
  }
}

export default Home