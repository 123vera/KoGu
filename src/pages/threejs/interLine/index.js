

import React, { Component } from 'react';
import * as THREE from 'three';
// import Stats from 'three/examples/jsm/libs/stats.module.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './index.scss'
import Img1 from '../../../assets/imgs/test1.jpg'
import Img2 from '../../../assets/imgs/test2.jpg'
import Img3 from '../../../assets/imgs/test3.jpg'
import Img4 from '../../../assets/imgs/test4.jpg'
import Img5 from '../../../assets/imgs/test5.jpg'
import Img6 from '../../../assets/imgs/test6.jpg'
import qipan from '../../../assets/imgs/qipan.png'

class InterLine extends Component {
  componentDidMount() {
    // this.init()
  }

  init = () => {
    var camera, scene, renderer, material, light
    var requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;


    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('mainContent')
    });

    // 或下面
    // renderer = new THREE.WebGLRenderer();
    // document.getElementsByClassName('line1')[0].appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setSize(400, 300);


    // light = new THREE.AmbientLight(0xffffff);

    // 定义点光源
    light = new THREE.PointLight(0xffffff, 4, 100);
    light.position.set(0, 6, 9); // 定义点光源的位置

    // 定义平行光源
    // light = new THREE.DirectionalLight(0xffffff, 2, 100); 
    // light.position.set(2, 5, 3); // 定义平行光源的位置


    // 定义聚光灯光源
    // light = new THREE.SpotLight(0xffffff, 2, 100); 
    // light.position.set(3, 5, 2); // 定义平行光源的位置
    // light.target.position.set(0,0,0); //  target 制定物体的位置



    scene = new THREE.Scene()


    camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight), 0.1, 1000);
    // camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 0.1, 1000);
    camera.position.set(0, 2, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0))

    scene.add(camera);
    scene.add(light);

    // camera = new THREE.PerspectiveCamera(45, 1, 1, 1000)
    // camera.position.set(0,0,6)
    // camera.lookAt(new THREE.Vector3(0,0,0))
    // scene.add(camera)

    material = new THREE.MeshBasicMaterial()

    // plane 白色正方形
    var planeGeo = new THREE.PlaneGeometry(0.5, 0.5);
    var plane = new THREE.Mesh(planeGeo, material);
    plane.position.x = 1;
    scene.add(plane);


    // triangle 白色三角形
    var triGeo = new THREE.Geometry();
    triGeo.vertices = [new THREE.Vector3(0, -0.5, 0),
    new THREE.Vector3(-1.5, -0.5, 0), new THREE.Vector3(-0.7, 0.5, 0)];
    triGeo.faces.push(new THREE.Face3(0, 2, 1));
    var triangle = new THREE.Mesh(triGeo, material);
    scene.add(triangle);

    // 红色长方形
    var redCube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 2), material)// 使用wireframe而不是实心的材质，以便看到正方体后方的边
    redCube.position.x = 3
    redCube.position.z = 6
    scene.add(redCube)



    // 椭圆, 起始经度为Math.PI / 6，经度跨度为Math.PI / 3
    var sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 15, Math.PI / 6, Math.PI / 2), new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true }))
    sphere1.position.z = 4
    scene.add(sphere1)



    // 坐标轴
    var axesHelper = new THREE.AxesHelper(10); // 可以创建一个可视化的三维坐标系
    scene.add(axesHelper);


    //  圆柱体
    var cyli = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 2, 18, 3, true), new THREE.MeshBasicMaterial({ color: 'white', wireframe: true }))
    cyli.position.z = 1
    scene.add(cyli)


    // 正三角形
    var thri = new THREE.Mesh(new THREE.TetrahedronGeometry(1), new THREE.MeshBasicMaterial({ color: 'red', wireframe: true }))
    thri.position.y = -3
    scene.add(thri)


    // 甜甜圈,粗糙的圆环
    var torusGeo = new THREE.TorusGeometry(2, 0.4, 12, 16) // 后面2个参数越大，越想圆环越精细，16代表16边，12代表每一个边分段12
    var torusMaterial = new THREE.MeshBasicMaterial({ color: 'orange', wireframe: true })
    var torusMesh = new THREE.Mesh(torusGeo, torusMaterial)
    torusMesh.position.x = 0
    torusMesh.position.y = -6
    scene.add(torusMesh)


    // 圆环结
    var torusKnotGeo = new THREE.TorusKnotGeometry(2, 0.4, 25, 16, Math.PI / 3)
    var torusKnotMaterial = new THREE.MeshBasicMaterial({ color: 'orange', wireframe: true })
    var torusKnotMesh = new THREE.Mesh(torusKnotGeo, torusKnotMaterial)
    torusKnotMesh.position.x = 0
    torusKnotMesh.position.y = 6
    scene.add(torusKnotMesh)


    // 任意几何图形
    var geometry = new THREE.Geometry()
    // 设置顶点位置
    // 顶部4顶点
    geometry.vertices.push(new THREE.Vector3(-1, 2, -1))
    geometry.vertices.push(new THREE.Vector3(1, 2, -1))
    geometry.vertices.push(new THREE.Vector3(1, 2, 1))
    geometry.vertices.push(new THREE.Vector3(-1, 2, 1))


    // 底部4顶点
    geometry.vertices.push(new THREE.Vector3(-2, 0, -2))
    geometry.vertices.push(new THREE.Vector3(2, 0, -2))
    geometry.vertices.push(new THREE.Vector3(2, 0, 2))
    geometry.vertices.push(new THREE.Vector3(-2, 0, 2))


    geometry.faces.push(new THREE.Face4(0, 1, 2, 3))  // 顶面连接
    geometry.faces.push(new THREE.Face4(4, 5, 6, 7))  // 底面连接

    geometry.faces.push(new THREE.Face4(1, 2, 6, 7))  // 4个侧面连接
    geometry.faces.push(new THREE.Face4(1, 3, 4, 7))  // 4个侧面连接
    geometry.faces.push(new THREE.Face4(2, 3, 5, 6))  // 4个侧面连接
    geometry.faces.push(new THREE.Face4(0, 4, 3, 5))  // 4个侧面连接


    var material1 = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true, opacity: 0.7, side: THREE.BackSide })
    var mesh = new THREE.Mesh(geometry, material1)
    mesh.position.x = -5
    mesh.position.y = 5
    scene.add(mesh)


    var material3 = new THREE.MeshPhongMaterial({
      color: '#ff5722',
      specular: 0xff0000,
      shininess: 1000
    });
    var sphere3 = new THREE.Mesh(new THREE.SphereGeometry(2, 20, 8), material3);

    sphere3.position.x = 5
    sphere3.position.y = 5
    light.target = sphere3; //  除了设置light.target.position的方法外，如果想让聚光灯跟着某一物体移动（就像真的聚光灯！），可以target指定为该物体

    scene.add(sphere3)


    // 绿色正方形, juguang 
    var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
      new THREE.MeshLambertMaterial({ color: '#00bcd4' }));
    light.target = greenCube

    greenCube.position.x = 5;
    greenCube.castShadow = true // 对于光源 以及要产生阴影的物体的调用 ， 1
    // greenCube.receiveShadow = true // 要接收阴影的物体调用 ， 2
    scene.add(greenCube);


    // 生成三维文字 , 没引入字体包,没有效果
    new THREE.FontLoader().load('fonts/helvetiker_regular.typeface.json', function (font) {
      var txtMater = new THREE.MeshNormalMaterial({
        flatShading: THREE.FlatShading,
        transparent: true,
        opacity: 0.9
      });
      var text = new THREE.Mesh(new THREE.TextBufferGeometry('Hello', { size: 17, height: 4, weight: true, font: THREE.Font() }), txtMater)
      text.position.z = 5;
      scene.add(text);
    })


    // 正方形纹理贴图， 6个面都是同一张图
    var texture = THREE.ImageUtils.loadTexture(Img1, {}, function () {
      renderer.render(scene, camera);
    })
    var material4 = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 3),
      new THREE.MeshLambertMaterial({ map: texture }));
    material4.position.x = 5;
    material4.position.y = -6;
    material4.position.z = 0;

    scene.add(material4);




    // 正方形纹理贴图， 6个面 - 6张图
    let imgA = [Img1, Img2, Img3, Img4, Img5, Img6]
    var materials = [];
    var loader = new THREE.TextureLoader()

    for (var i = 1; i <= 6; i++) {
      materials.push(new THREE.MeshBasicMaterial({
        map: loader.load(imgA[i],
          function () {
            renderer.render(scene, camera);
          }),
        overdraw: true,
      }));
    }

    var cube = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 3), materials);
    cube.position.x = -5;
    cube.position.y = -6;
    cube.position.z = -2;
    cube.rotateX(-Math.PI / 3);    //旋转网格模型

    scene.add(cube);




    // 蓝色球
    var sphereRadius = 1
    var sphere = new THREE.Mesh(new THREE.SphereGeometry(sphereRadius, 25, 15), new THREE.MeshPhongMaterial({ color: 'blue' }))
    sphere.position.x = -6
    sphere.position.y = 5;
    scene.add(sphere)



    // 由一张图片 生成黑白相间棋盘 https://img9.doubanio.com/view/ark_works_pic/common-largeshow/public/44367025.jpg
    let loader2 = new THREE.TextureLoader()
    let mesh3
    let geo = new THREE.PlaneGeometry(4, 4) // 创建正方形


    const singleLoad = loader2.load(qipan, function (texture) {
      // const singleLoad = loader2.load(Qipan, function (texture) {
      let metarials2 = new THREE.MeshBasicMaterial({
        map: texture,
      })

      mesh3 = new THREE.Mesh(geo, metarials2)
      mesh3.position.x = -6
      mesh3.position.y = -1
      mesh3.rotation.x = -Math.PI / 2.5
      scene.add(mesh3)
    })

    singleLoad.wrapS = singleLoad.wrapT = THREE.RepeatWrapping; // 指定重复方式为两个方向（wrapS和wrapT）都重复
    singleLoad.repeat.set(4, 4); // 设置两个方向上都重复4次，由于我们的图像本来是有2行2列，所以重复4次即为8行8列：


    // 小球运动
    let v = 0 // 蓝色球 自由落体运动的 速度
    let a = -0.01 // 蓝色球 自由落体运动的 加速度，代表每帧小球向y方向负方向移动0.1个单位。
    let isMoving = true // 球是否运动

    const sphereDraw = () => {
      if (isMoving) {
        sphere.position.y += v
        v += a

        if (sphere.position.y <= sphereRadius) { // 碰到棋盘
          v += -v * 0.9
          // sphere.position.y += 0.1
        }

        if (Math.abs(v) < 0.004) { // 停止跳动
          isMoving = false
          sphere.position.y = 0
        }

        requestAnimationFrame(sphereDraw)

        renderer.render(scene, camera);
      }
    }
    sphereDraw()

  }


  render() {

    return (
      <div className='line1'>
        <div id="info">SUMO</div>
        <canvas id="mainContent"></canvas>
      </div>
    )
  }
}

export default InterLine