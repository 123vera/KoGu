import React, { Component } from 'react'
import './Grid.scss'

class Index extends Component {
render(){
  return (
    <div>
      <div className="navbar navbar-light">
    <div className="container">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SKYPE</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active"><a href="index.html">Home</a> </li>
                <li><a href="#aboutUS">About</a> </li>
                <li><a href="#service">Service</a> </li>
                <li><a href="#contact">Contact</a> </li>

            </ul>
            {/* <ul className="nav navbar-nav navbar-sub  pull-right">
                <li><a href="#">Register</a> </li>
                <li><a href="#">Login</a> </li>
            </ul> */}
        </div>
    </div>
</div>
      
      <section className="test1">

      </section>
    
    </div>
    )
}
}
export default Index