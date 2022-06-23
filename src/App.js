import React, { Component, lazy } from 'react';
import { Switch as SwitchBar } from 'antd'
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import Routes from './routes'
import './App.css';
import 'antd/dist/antd.css';
import { resolve } from 'dns';


export const HomeComponent = lazy(() => import('./pages/javascript/home'))
export const HtmlTagComponent = lazy(() => import('./pages/javascript/home'))



class App extends Component {



  onSwitchChange(checked) {
    const isLight = checked
    if (isLight) {
      document.querySelector('.App').classList.add("light")
    } else {
      document.querySelector('.App').classList.remove("light")
    }
  }

  render() {
    // document.body.style.setProperty('--themeColor', '#ff0000'); // css 变量方法
    return (
      <div className="App">
        {/* fallback属性也可以是组件，但是目前只支持组件加载的loading，不支持发送请求的loading */ }
        {/* <Suspense fallback="正在加载中..."> 
                <HomeComponent />
                <HtmlTagComponent/>
            </Suspense> */}
        <br />
        <SwitchBar checkedChildren="关灯" unCheckedChildren="开灯" defaultChecked={ false } onChange={ this.onSwitchChange } />
        <br />

        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>

        {/* <Pdf/> */ }
      </div>
    );
  }
}

export default withRouter(App);


