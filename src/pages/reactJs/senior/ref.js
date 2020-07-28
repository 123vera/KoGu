import React, { forwardRef  } from 'react';

// Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。

// 不推荐使用
// FancyButton 使用 React.forwardRef 来获取传递给它的 ref，然后转发到它渲染的 DOM button
const FancyButton = forwardRef((props, ref) => {
  console.log(props)
  console.log(ref)
    return(
      <div>
        {/* 再向下转发该 ref 参数到button */}
        {/* 当 ref 挂载完成，ref.current 将指向 <button> DOM 节点 */}
        <button ref={ref}>点击我{props.children}</button>
      </div>
    )
})

export default function(){
  const ref = React.createRef() // 创建一个Reactref并赋值给ref变量，最终要转发到 button的ref
  return(
    <div>
      {/* 将ref其向下传递给FancyButton */}
      <FancyButton ref={ref}>Click me!</FancyButton>
    </div>
  )
}