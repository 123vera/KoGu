

import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './Line.scss'


class Line extends Component {
  componentDidMount () {
      this.init()
  }
 

   //定义应用所需的组件:相机,场景,渲染器
   init = ()=> {
      //相机参数
      /**
       * 正投影相机设置
       */
      var camera
      var width = window.innerWidth; //窗口宽度
      var height = window.innerHeight; //窗口高度
     
      camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000);
      // camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );  // 相机
      camera.position.set( 0, 0, 500); // z轴代表眼睛离屏幕的远近位置， xy代表与屏幕中心点 同一视平线， （默认位置为:0,0,0.）
      // camera.lookAt(0,0,0);


      // 生成渲染器
      var renderer 
      renderer = new THREE.WebGLRenderer();  // 渲染器
      renderer.setSize( window.innerWidth, window.innerHeight );  //设置渲染器的大小
      document.body.appendChild( renderer.domElement ); 
     

      // 材质
      var material
      material = new THREE.LineBasicMaterial( { color: 'white', linewidth: 2, } ); 



      // 画直线
      var points = []; 
      points.push(
         new THREE.Vector2( 0, 2*window.innerHeight, 0 ),
         new THREE.Vector2( 0, -window.innerHeight/5, 0 ) 
       ); 
      


      // 声明形状(画直线)
      var geometry
      geometry = new THREE.BufferGeometry().setFromPoints(points);



      var mesh;
      mesh = new THREE.Line( geometry, material );// 网格 
      mesh.position.y = 700



      // 声明场景
      var scene
      scene = new THREE.Scene(); // 场景
      scene.add( mesh ); 

     


       // animate
       const animate = () => {
       
        if(mesh.position.y === window.innerHeight){
          mesh.position.y = window.innerHeight/3
          return 
        }


        //移动物体x、y
        if((mesh.position.y > -window.innerHeight/2)){
          mesh.position.y -= 20
        } else {
          mesh.position.y = window.innerHeight
        }

        

        //移动相机x、y、z
        // if(camera.position.z < 500){
        //   camera.position.y += 2
        // }

        renderer.clear()
        renderer.render( scene, camera );

        requestAnimationFrame( animate );
      }


      animate()
 }

  
  render (){
    return (
      <div className='line'>
        <div id="info">SUMO</div>
      </div>
    )
  }
}

export default Line