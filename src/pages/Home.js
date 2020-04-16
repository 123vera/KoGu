import React, { Component } from 'react';
import Count from './../components/hook/ExampleCount'
// import JsTool from './../components/common/JsTool'
import './Home.scss'

class Home extends Component {
  render (){
    return (
      <div className='home'>
    
        {/* <JsTool/> */}
        <h2>Hook</h2>
        <Count/>
      </div>
    )
  }
}

export default Home