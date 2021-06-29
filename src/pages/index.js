import React from 'react';
import DomToImage from './../components/common/DomToImage/index'

function argsFn(a, b, c) {
  console.log('arguments.length', arguments.length) //实际传参个数 1
  console.log('argsFn.length', argsFn.length) // 期望传参数个数 3
  argsFn(3, 4) // 2, 3

}

const Index = () => (
  <div>
    <p onClick={ () => argsFn(3, 4) }>Hello next.js</p>
    <DomToImage />
  </div>
)

export default Index
