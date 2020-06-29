import React, { useState, useEffect, useCallback } from 'react';
import './reactHook.scss'
import axios from "axios";


function Hook (){
  const [ number, setNumber ] = useState(null) 
  const [ count, setCount ] = useState(0) 

  // 只执行一次，= componentDidMount
  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
  useEffect(() => {
    // axios.post('/api/tags').then(res => {console.log('mock数据',res.data.data.list);setNumber(2)})
    // axios.post('/api/currentUser').then(res => {console.log('mock数据',res.data.data.list);setNumber(2)})
    axios.post('http://greencourtdevweb:5005/api/v1/help_center/call_back').then(res => {console.log(res.data.data.list);setNumber(2)})
  }, [])
  
  
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ 我们的 effect 不适用组件作用域中的任何变量



  useEffect(() => {
      setNumber(number => number+11) //  在这不依赖于外部的 `count` 变量
      // setNumber(11)
  }, [])

  // 如果处于某些原因你 无法 把一个函数移动到 effect 内部，还有一些其他办法
  // function ProductPage({ productId }) {
  //   // ✅ 用 useCallback 包裹以避免随渲染发生改变
  //   const fetchProduct = useCallback(() => {
  //     // ... Does something with productId ...
  //   }, []); // ✅ useCallback 的所有依赖都被指定了
  
  //   return <ProductDetails fetchProduct={fetchProduct} />;
  // }
  
  // function ProductDetails({ fetchProduct }) {
  //   useEffect(() => {
  //     fetchProduct();
  //   }, [fetchProduct]); // ✅ useEffect 的所有依赖都被指定了
  //   // ...
  // }
  
  return(
    <div className="reacthook">
      <p>-number: {number}-</p>
      <p>-count: {count}-</p>
      <p onClick={() => setNumber(number+10)}>点击按钮+1</p>
      <p onClick={() => setNumber(count+10)}>点击按钮count+1</p>
    </div>
  )
}

export default Hook