

import React, { Component } from 'react';
// import { Helmet } from 'react-helmet'
// import * as THREE from 'js/three.module.js';


// import JsTool from './../components/common/JsTool'
import './Home.scss'

class Threejs extends Component {

  componentDidMount () {
      // init()
  }

//   function init() {
// 	var camera = new window.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
//  camera.position.z = 1;

// 	var scene = new window.Scene();

// 	var geometry = new window.BoxGeometry( 0.2, 0.2, 0.2 );
// 	var material = new window.MeshNormalMaterial();

//   var	mesh = new window.Mesh( geometry, material );
// 	scene.add( mesh );

// 	var renderer = new window.WebGLRenderer( { antialias: true } );
// 	this.renderer.setSize( window.innerWidth, window.innerHeight );
// 	document.body.appendChild( renderer.domElement );

// }

// function animate() {
// 	requestAnimationFrame( animate );

// 	this.mesh.rotation.x += 0.01;
// 	this.mesh.rotation.y += 0.02;

// 	this.renderer.render( scene, camera );

// }

  render (){
    return (
      <div className='threejs'>

      </div>
    )
  }
}

export default Threejs