import React, { useEffect } from 'react'

function Index() {
    useEffect(() => {
        complexData()
    }, [])

    function complexData(){
        let obj1 = {  name: 'wangsiran' }
        let obj2 = obj1

        console.log(obj1)
        console.log(obj2)

        obj2.name = "wang sisi" // 赋值引用数据类型，并进行修改，会改变原本的值（obj1）

        console.log(obj1)
        console.log(obj2)
    }

    return (
    <div></div>
    )
}

export default Index