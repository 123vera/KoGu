
import React from 'react'

const Network = function () {
    localStorage.x = new Number(3)
    console.log(typeof localStorage.x, localStorage.x) // string 3
    return (
        <div>
            <ul>
                <li>白屏时间：输入url后、跳转页面、刷新页面 </li>
                <li>首屏时间：</li>
                <li></li>
            </ul>
        </div>
    )
}

export default Network