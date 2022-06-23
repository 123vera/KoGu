// 1.编写calc函数
// - 实现多参数累乘功能（参数数量不限）
// - 对于相同参数(不计先后)可以缓存
// - 对缓存策略做优化

// Calc(1, 2, 3)  //6
// Calc(4, 2)  //8
// Calc(9, 1, 3, 2)  //54

let obj = new Map()


function res(arr) {
    let result = arr.reduce((prev, curr) => {
        return prev * curr
    }, 1)
    return result
}

function Calc(...parms) {
    let newP = parms.sort((a, b) => a - b)
    let newStr = newP.toString() // '123'

    if (obj.get(newStr)) {
        return obj.get(newP)
    } else {
        let val = res(newP)
        obj.set(newStr, val)
    }
}


Calc(1, 2, 3)  //6
console.log('=========')
Calc(3, 2, 1)  //6
// Calc(4, 2)
// Calc(9, 1, 3, 2) 