

import React, { Component } from 'react';
import * as THREE from 'three';
// import Stats from 'three/examples/jsm/libs/stats.module.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './interLine.scss'


var container, stats;
			var camera, scene, raycaster, renderer, parentTransform, sphereInter;

			var mouse = new THREE.Vector2();
			var radius = 100, theta = 0;

class InterLine extends Component {
  componentDidMount () {
			this.init()
  }
 

	 onWindowResize =()=> {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	 onDocumentMouseMove =( event )=> {

		event.preventDefault();

		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	}
	
   //定义应用所需的组件:相机,场景,渲染器
   init = ()=> {

		container = document.createElement( 'div' );
		document.body.appendChild( container );

		var info = document.createElement( 'div' );
		info.style.position = 'absolute';
		info.style.top = '10px';
		info.style.width = '100%';
		info.style.textAlign = 'center';
		info.innerHTML = '<a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - interactive lines';
		container.appendChild( info );

		camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
		
		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0xf0f0f0 ); // 改变屏幕背景色

		var geometry = new THREE.SphereBufferGeometry( 5 );
		var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );

		// 红色多边形点
		// sphereInter = new THREE.Mesh( geometry, material );
		// sphereInter.visible = false;
		// scene.add( sphereInter );

		var lineGeometry = new THREE.BufferGeometry();
		var points = [];

		var point = new THREE.Vector2();
		var direction = new THREE.Vector2();

		// 线条的数量 1条
		for ( var i = 0; i < 50; i ++ ) {

			direction.x += 0.5;
			direction.y += 10.5;
			// direction.z += point.z;

			// direction.x += Math.random() - 0.5;
			// direction.y += Math.random() - 0.5;
			// direction.z += Math.random() - 0.5;
			// direction.normalize().multiplyScalar( 10 );

			point.add( direction );
			points.push( point.x, point.y);
		}

		// lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

		lineGeometry.setAttribute( 'position', new THREE.Uint16Attribute( points, 3 ) );

		parentTransform = new THREE.Object3D();
		// parentTransform.position.x = parentTransform.position.x * 40 - 20;
		// parentTransform.position.y = parentTransform.position.y * 40 - 20;
		// parentTransform.position.z = Math.random() * 40 - 20;

		// parentTransform.rotation.x = point.x * 2 * Math.PI;
		// parentTransform.rotation.y = point.y * 2 * Math.PI;
		// parentTransform.rotation.z = point.z * 2 * Math.PI;

		// parentTransform.scale.x = Math.random() + 0.5;
		// parentTransform.scale.y = Math.random() + 0.5;
		// parentTransform.scale.z = Math.random() + 0.5;

		// 随机线条，
		for ( var i = 0; i < 30; i ++ ) {

			var object;

			var lineMaterial = new THREE.LineBasicMaterial( { color: 'red' } );

			// object = new THREE.Line( lineGeometry, lineMaterial );
				object = new THREE.LineSegments( lineGeometry, lineMaterial );

			// if ( Math.random() > 0.5 ) {
			// 	object = new THREE.Line( lineGeometry, lineMaterial );
			// } else {
			// 	object = new THREE.LineSegments( lineGeometry, lineMaterial );
			// }

      // 线条方向
			object.position.x = object.position.x * 40 - 200;
			object.position.y = 	object.position.y * 400 - 200;
			// object.position.z = Math.random() * 400 - 200;

			// 线条旋转角度
			// object.rotation.x = object.position.x * 3;
			// object.rotation.y = object.rotation.y * 2;
			// object.rotation.z = object.rotation.z * 2;

			// 线条缩放大小，呈现出来就是长短
			// object.scale.x = object.scale.x;
			object.scale.y = object.scale.y + 110.5;
			object.scale.z = object.scale.z + 2.5;

			parentTransform.add( object );
		}

		scene.add( parentTransform );

		// raycaster = new THREE.Raycaster();
		// raycaster.params.Line.threshold = 3;

	
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( renderer.domElement );


		document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
		window.addEventListener( 'resize', this.onWindowResize, false );

	

			theta += 0.1;
			camera.position.set( 0, 0, 1500);
			camera.lookAt( scene.position );

			// camera.updateMatrixWorld();

			// find intersections
			// raycaster.setFromCamera( mouse, camera );

			// 相交出现红点
			// var intersects = raycaster.intersectObjects( parentTransform.children, true );

			// if ( intersects.length > 0 ) {

			// sphereInter.visible = true;
			// sphereInter.position.copy( intersects[ 0 ].point );
			// } else {
			// sphereInter.visible = false;
			// }

			const animate = ()=> {
				requestAnimationFrame( animate );
				// stats.update();
			}

			renderer.render( scene, camera );
			animate();
 }

 

  
 
  render (){
    return (
      <div className='line'>
        <div id="info">SUMO</div>
      </div>
    )
  }
}

export default InterLine