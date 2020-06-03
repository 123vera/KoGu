

import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // 轨道控制器
import './Axis.scss'

var renderer, width, height;
var camera,scene, light,cube;

class Axis extends Component {
  componentDidMount () {
    this.initThree();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initObject();
    renderer.clear();
    renderer.render(scene, camera);
  }
  
   initThree =()=>{
      width = document.getElementById('canvas-frame').clientWidth;
      height = document.getElementById('canvas-frame').clientHeight;
      renderer = new THREE.WebGLRenderer({
          antialias : true
      });
      renderer.setSize(width, height);
      document.getElementById('canvas-frame').appendChild(renderer.domElement);
      renderer.setClearColor('block', 1.0);
  }

  
             initCamera =()=>{
                camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
                camera.position.x = 0;
                camera.position.y = 1000;
                camera.position.z = 0;
                camera.up.x = 0;
                camera.up.y = 0;
                camera.up.z = 1;
                camera.lookAt({
                    x : 0,
                    y : 0,
                    z : 0
                });
            }
  
   
           initScene =()=>{
                scene = new THREE.Scene();
            }

      
             initLight =()=>{
                light = new THREE.DirectionalLight('red', 1.0, 0);
                light.position.set(100, 100, 200);
                scene.add(light);
            }


initObject =()=>{
    var geometry = new THREE.Geometry();
    // B begin
    geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
    geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );
    // B end

    for ( var i = 0; i <= 20; i ++ ) {

        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
        line.position.z = ( i * 50 ) - 500;
        scene.add( line );

        // var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
        // line.position.x = ( i * 50 ) - 500;
        // line.rotation.y = 90 * Math.PI / 180;
        // scene.add( line );
    }
}

  render (){
    return (
      <div className='axis'>
        <div id="canvas-frame"></div>
      </div>
    )
  }
}

export default Axis