import React, { Component } from 'react';
import {  BrowserRouter as Router, Route ,Switch } from 'react-router-dom'
import InputItem from 'components/common/InputItem/index'
import Interview from './components/hook/Interview'
import HtmlTag from './components/common/HtmlTag/index'
// import JsTool from 'components/common/JsTool'
import Animate from './pages/Animate'
import threejs from './pages/Threejs'
import Home from './pages/Home'
import Grid from './pages/Grid'
import './App.css';

class App extends Component {
  render(){
    return (
      
      <div className="App">
      <Router>
           <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/htmlTag'  component={HtmlTag} />
             <Route path='/inputItem' component={InputItem} />
             <Route path='/animate' component={Animate} />
             <Route path='/grid' component={Grid} />
             <Route path='/threejs' component={threejs} />
             <Route path='/inter' component={Interview} />
           </Switch>
           </Router>
           {/* <Pdf/> */}
         </div>
      
       );
  }
}


export default App;
