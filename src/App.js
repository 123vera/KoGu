import React, { Component } from 'react';
import {  HashRouter as Router, Route ,Switch } from 'react-router-dom'
import InputItem from 'components/common/InputItem/index'
import HtmlTag from 'components/common/HtmlTag/index'
// import JsTool from 'components/common/JsTool'
import Animate from './pages/Animate'
import Home from './pages/Home'
import Grid from './pages/Grid'
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
           <Switch>
             <Route path='/home' component={Home} />
             <Route path='/htmlTag' component={HtmlTag} />
             <Route path='/inputItem' component={InputItem} />
             <Route path='/animate' component={Animate} />
             <Route path='/grid' component={Grid} />
           </Switch>
           {/* <Pdf/> */}
         </div>
      </Router>
       );
  }
}


export default App;
