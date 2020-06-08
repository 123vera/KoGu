

import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './Curve.scss'




class Curve extends Component {
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
      camera.position.set( 0, 0, 50); // z轴代表眼睛离屏幕的远近位置， xy代表与屏幕中心点 同一视平线， （默认位置为:0,0,0.）
      // camera.lookAt(0,0,0);



      // 生成渲染器
      var renderer 
      renderer = new THREE.WebGLRenderer();  // 渲染器
      renderer.setSize( window.innerWidth, window.innerHeight );  //设置渲染器的大小
      document.body.appendChild( renderer.domElement ); 


      // 材质
      var material
      material = new THREE.LineBasicMaterial( { color: 'white', linewidth: 2, } ); 


      // 画弧线
      var curve = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( 0, 500, 0 ),
        new THREE.Vector3( 20, 200, 0 ),
        new THREE.Vector3( -10, 0, 0 ),
        new THREE.Vector3( -20, -150, 0 ),
        new THREE.Vector3( 30, -500, 0 )
      ] );


      

      var points = curve.getPoints(100); // 这个参数决定曲线是否， 50等分点
    


      // 声明形状(画直线)
      var geometry
      geometry = new THREE.BufferGeometry().setFromPoints(points);
      // geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) ); // 3 代表3维坐标
     
     
     
      var mesh;
      mesh = new THREE.Line( geometry, material );// 网格 




      // 声明场景
      var scene
      scene = new THREE.Scene(); // 场景
      scene.add( mesh ); 

     
      for ( var i = 0; i < 100; i ++ ) {
        mesh.position.x = ( Math.random() - 0.4 ) * 1000;
        mesh.position.y = ( Math.random() - 0.5 );
        mesh.position.z = ( Math.random() - 0.5 ) ;

        console.log(mesh)
        scene.add( mesh );
      }


       // animate
       const animate = () => {
        mesh.position.x = ( Math.random() - 0.9) * 600;
       

        renderer.clear()
        renderer.render( scene, camera );

        requestAnimationFrame( animate );
      }


      animate()
 }

  
  render (){
    return (
      <div className='curve'>
        <div id="info">Curve</div>
      </div>
    )
  }
}

export default Curve