import React, { Component, lazy } from 'react';
import { Switch as SwitchBar } from 'antd'
import { BrowserRouter as Router, Route,Switch, withRouter } from 'react-router-dom'
import InputItem from './components/common/InputItem'
import Interview from './components/hook/Interview'
import HtmlTag from './components/common/HtmlTag'
import ES from './components/common/Es'
import Line from './pages/THREEJS/Line'
import InterLine from './pages/THREEJS/interLine'
import Curve from './pages/THREEJS/Curve'
import Home from './pages/JAVASCRIPT/home'
import ReactHook from './pages/JAVASCRIPT/reactHook'
import Javascript from './pages/JAVASCRIPT/jsTest1.js'
import CloneDeep from './pages/JAVASCRIPT/cloneDeep.js'
import ReactSenior from './pages/JAVASCRIPT/reactJs/reactSenior.js'
import ReactSource from './pages/JAVASCRIPT/reactJs/reactSource.js'
import ReactRef from './pages/JAVASCRIPT/reactJs/senior/ref'
import ReactContext from './pages/JAVASCRIPT/reactJs/senior/context'
import Catalogue from './pages/catalogue'
import IndexHome from './pages/index'
import Scrollreveal from './pages/HTML/scrollreveal'
import WorldArea from './pages/HTML/worldArea'
import Css from './pages/CSS/index'
import Testcss from './pages/CSS/test'
// import dynamic from 'next/dynamic'
import './App.css';
import 'antd/dist/antd.css';

// // 使用 Mock
// var Mock = require('mockjs')
// Mock.setup({
//   timeout: 400
// })
// var Random = Mock.Random
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'age|4-55': 4,
//         'aj|4': 2,
//         'address': Random.county(), //(每条数据都一样 )  or @county(每条数据都不一样)
//         'email': '@email', // or Random.email(),
//         'firstName': '@capitalize(@name)', // == Random.capitalize(Random.name()), @name = Random.name(), @capitalize = Random.capitalize(),差别在于@ 符 生成的值在遍历过程中是随机的，Rondom.则是固定一个值，， 姓名的首字母大写
//         'idcard': '@id', // 随机生成一个18位身份证
//         'date': '@date("yyyy-MM-dd")'
//     }]
// })
// // 输出结果
// console.log(JSON.stringify(data, null, 4))

export const HomeComponent = lazy(() => import('./pages/JAVASCRIPT/home'))
export const HtmlTagComponent = lazy(() => import('./pages/JAVASCRIPT/home'))

// const HomeComponent = dynamic(  // 自定义加载组件 nextjs
//   import('../components/loading'),
//   {
//     loading: () => <p>...</p>
//   }
// )

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
        {/* fallback属性也可以是组件，但是目前只支持组件加载的loading，不支持发送请求的loading */}
        {/* <Suspense fallback="正在加载中..."> 
                <HomeComponent />
                <HtmlTagComponent/>
            </Suspense> */}
        <br/>
        <SwitchBar checkedChildren="关灯" unCheckedChildren="开灯" defaultChecked={false} onChange={this.onSwitchChange}/>
        <br/>

        <Router>
          <Switch>
            <Route path='/' exact component={Catalogue} />
            <Route path='/hook' exact component={ReactHook} />
            <Route path='/es11' exact component={ES} />
            <Route path='/react-ref' exact component={ReactRef} />
            <Route path='/react-context' exact component={ReactContext} />
            <Route path='/react-source' exact component={ReactSource} />
            <Route path='/react-senior' exact component={ReactSenior} />
            <Route path='/index' exact component={IndexHome} />
            <Route path='/home' component={Home} />
            <Route path='/htmlTag' component={HtmlTag} />
            <Route path='/inputItem' component={InputItem} />
            {/* <Route path='/animate' component={Animate} /> */}
            <Route path='/line' component={Line} />
            <Route path='/interLine' component={InterLine} />
            {/* <Route path='/axis' component={Axis} /> */}
            <Route path='/curve' component={Curve} />
            <Route path='/inter' component={Interview} />
            <Route path='/js' component={Javascript} />
            <Route path='/scrollreveal' component={Scrollreveal} />
            <Route path='/worldArea' component={WorldArea} />
            <Route path='/css' component={Css} />
            <Route path='/testcss' component={Testcss} />
            <Route path='/cloneDeep' component={CloneDeep} /> 
          </Switch>
        </Router>

        {/* <Pdf/> */}
      </div>

    );
  }
}

export default withRouter(App);
