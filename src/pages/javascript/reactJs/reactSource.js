// csstype
// import * as CSS from 'csstype';
import React from 'react'
import './index.scss'

// const style: CSS.Properties = {
//   colour: 'white', // Type error on property
//   textAlign: 'middle', // Type error on value
// };
function sourceCode () {
  return (
    <div  id="sourceCode"> 
      <h2>源码解析</h2>
      <ul>
        <li>export {`{ ... }`} from './src/React'</li>
        <li>
          Object.seal(Object) 封闭对象的方法
          <br/>
          <code>
          const object1 = {`{ property1: 42 }`};
          <br/>
          Object.seal(object1);
          <br/>
          object1.property1 = 33; // 仅可以改值
          <br/>
          delete object1.property1;  // 删除无效
          <br/>
          object1.property2 = ccc; // 添加字呢属性无效
          </code>
        </li>

        <li>Object.is(value1, value2) 方法判断两个值是否是相同的值。<br/><code>Object.is(null, null) // true</code> <br/><code>Object.is([], []);  // false </code>  </li>

      </ul>
    </div>
  )
}

export default sourceCode