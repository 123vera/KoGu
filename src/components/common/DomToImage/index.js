import domtoimage from 'dom-to-image';
import React, { Component } from 'react';
import "./index.scss"


// dom转为图片,插件dom-to-image
// 小米自带浏览器  qq浏览器手机端 无法生成
class Index extends Component{
  onDomClick = () => {
    // 生成png的图片插入的到当前页面
    var node = document.getElementById('wrap');
    domtoimage.toPng(node, {bgcolor: '#000'})
    .then(function(dataUrl){ 
       //console.log(dataUrl)  //生成图片的base64路径
      
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = dataUrl ;
        // img.src = dataUrl + '?v=' + Math.random();
        document.getElementById('domNode').appendChild(img);
        // document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

    // 生成图片并下载png格式
    // domtoimage.toBlob(document.getElementById('domNode'))
    // .then(function (blob) {
    //     window.saveAs(blob, 'my-node.jpeg');
    // });


   // 生成图片并下载jpeg格式
    domtoimage.toJpeg(document.getElementById('domNode'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        // link.download = 'my-image-name.jpeg'; // 取消自动下载（手机上会自动打开浏览器下载）
        link.href = dataUrl;
        link.click();
    });
  }


  render(){
    return(
      <div id="domNode">
        <div id="wrap">
          <h1>这是标题</h1>
          <small>一小段说明文字</small>
          <br/>
          <img className="imgClass" src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4282167633,818735726&fm=58" alt=""/>
        </div>
      
        <button onClick={() => this.onDomClick()}>转为图片</button>
        <br/>
      </div>
    )
  }
}

export default Index