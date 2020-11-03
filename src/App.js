import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import InputItem from './components/common/InputItem'
import Interview from './components/hook/Interview'
import HtmlTag from './components/common/HtmlTag'
import ES from './components/common/Es'
import Animate from './pages/animate'
import Line from './pages/threejs/Line'
import InterLine from './pages/threejs/interLine'
import Curve from './pages/threejs/Curve'
import Home from './pages/home'
import ReactHook from './pages/reactHook'
import Javascript from './pages/javascript/jsTest1.js'
import ReactSenior from './pages/reactJs/reactSenior.js'
import ReactSource from './pages/reactJs/reactSource.js'
import ReactRef from './pages/reactJs/senior/ref'
import ReactContext from './pages/reactJs/senior/context'
import Catalogue from './pages/catalogue'
import IndexHome from './pages/index'
import Scrollreveal from './pages/scrollreveal'
import WorldArea from './pages/worldArea'
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

export const HomeComponent = lazy(() => import('./pages/home'))
export const HtmlTagComponent = lazy(() => import('./pages/home'))

// const HomeComponent = dynamic(  // 自定义加载组件 nextjs
//   import('../components/loading'),
//   {
//     loading: () => <p>...</p>
//   }
// )

class App extends Component {
  render() {
    document.body.style.setProperty('--themeColor', '#ff0000'); // css 变量方法
    return (

      <div className="App">
        {/* fallback属性也可以是组件，但是目前只支持组件加载的loading，不支持发送请求的loading */}
        {/* <Suspense fallback="正在加载中..."> 
                <HomeComponent />
                <HtmlTagComponent/>
            </Suspense> */}

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
            <Route path='/animate' component={Animate} />
            <Route path='/line' component={Line} />
            <Route path='/interLine' component={InterLine} />
            {/* <Route path='/axis' component={Axis} /> */}
            <Route path='/curve' component={Curve} />
            <Route path='/inter' component={Interview} />
            <Route path='/js' component={Javascript} />
            <Route path='/scrollreveal' component={Scrollreveal} />
            <Route path='/worldArea' component={WorldArea} />
          </Switch>
        </Router>

        {/* <Pdf/> */}
      </div>

    );
  }
}

export default withRouter(App);
