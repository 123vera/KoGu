

import React from 'react'
import { Button } from 'antd/lib/radio';


// Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
// 使用场景是： 组件A有子组件——是组件B；组件B有子组件-组件C； A包含B B包含C
// A中有个值  c要用， 常规做法是 A-B-C，需要一级一级的传递
// 使用React.createContext  可以省略A-B、B-C，也就是直接A-C，C中使用this.context获取值
const ThemeContext = React.createContext('light')
const { Provider, Consumer } = React.createContext('light')  // 

class ReactIndex extends React.Component{
  render(){
    return(
      // <ThemeContext.Provider  value="blue">
      //   <Index/>
      // </ThemeContext.Provider>
      <Provider  value="blue">
        <Index/>
      </Provider>
    )
  }
}

export const Index = function () {
    return(
      <ThemeButton />
    )
}

class ThemeButton extends React.Component{
  static contextType = ThemeContext
  render(){
    // console.log(this.context) // blue
    return(
      <Button theme={this.context}/>
    )
  }
 
} 

console.log(<ThemeButton />) // React元素

export default ReactIndex


