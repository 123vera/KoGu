import React, { useState, useEffect } from 'react';

   // 自定义hook
   function useTitle(content) {
     const [ value, setValue ] = useState(content || '')
     document.title = value

      const onChange = (e) => {
        setValue(e.target.value)
      }
       return {value, onChange}
    }


  function Count (){
    const [ count, setCount] = useState(3)
    const [ name, setName] = useState('Mary')
    const [ value, setValue ] = useState('--')

    const inputProps = useTitle(name);
  
    // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
    useEffect(() => {
      if(count <10) {
        document.title =`关于HOOK${count}`
      } else {
        document.title = `关于HOOK${name}`
      }
    }, [count, name])



    return (
      <div>
        <p>{count} </p>  
        <button onClick={() => setCount(count+1)}>add</button>
        <br/>
        <button onClick={() => setName(name)}>addName</button>
        <br/>
        <input {...inputProps}/>
        <br/>
        <button onClick={() => setValue('btn1')}>btn1{value}</button>
        <button onClick={() => setValue('btn2')}>btn2{value}</button>
      </div>
    )
  }
  export default Count
