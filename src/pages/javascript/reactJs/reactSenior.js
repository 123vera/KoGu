// csstype
// import * as CSS from 'csstype';
import React from 'react'
import './index.scss'

// const style: CSS.Properties = {
//   colour: 'white', // Type error on property
//   textAlign: 'middle', // Type error on value
// };

function Index () {
  return (
    <div id="senior"> 
      <h2>React</h2>
      <ul>
        <li>
          <a href="/react-context">React-context</a>
        </li>
        <li>
          <a href="/react-ref">React-ref</a>
        </li>
      
      </ul>
    </div>
  )
}

export default Index