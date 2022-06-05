import React, { useEffect, useReducer } from 'react'

let initCount = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': return { count: state.count + 1 };
        case 'DEC': return { count: state.count - 1 };
        default: return null
    }
}

function Index() {
    const [state, dispatch] = useReducer(reducer, initCount)


    useEffect(() => {
        complexData()
    }, [])


    function complexData() {
        let obj1 = { name: 'wangsiran' }
        let obj2 = obj1

        console.log(obj1)
        console.log(obj2)

        obj2.name = "wang sisi" // 赋值引用数据类型，并进行修改，会改变原本的值（obj1）

        console.log(obj1)
        console.log(obj2)
    }

    return (
        <div>
            <p>{ state.count }</p>

            <button onClick={ () => dispatch({ type: 'ADD' }) }>+1</button>
            <button onClick={ () => dispatch({ type: 'DEC' }) }>-1</button>
        </div>
    )
}

export default Index