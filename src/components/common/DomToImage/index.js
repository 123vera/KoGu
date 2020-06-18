import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import React, { Component } from 'react';
import "./index.scss"

class Index extends Component{
  onDomClick = async () => {

    // domtoimage.toBlob(document.getElementById('domNode'))
    // .then(function (blob) {
    //     saveAs(blob, 'my-node.png');
    // });
const wrap = document.getElementById('wrap')
    console.log(' domtoimage.toPng(node)',document.getElementById('wrap'))

    await domtoimage.toPng(wrap, {width: 100, height: 100})
    .then((dataUrl)  => { 
      console.log('dataUrl',dataUrl)
        var img = new Image();
        img.src = dataUrl;
        document.getElementById('domNode').appendChild(img);
    })

    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  render(){
    return(
      <div id="domNode">
      <div id="wrap" className="wrap">
       <h1>这是标题</h1>
       <small>一小段说明文字</small>
      </div>
      <br/>
      <button onClick={this.onDomClick}>转为图片</button>
      <br/>
      <br/>
      </div>
    )
  }
}

export default Index