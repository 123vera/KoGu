// var validPalindrome = function (str) {
//     const reverse = str.split('').reverse().join('')
//     if (reverse === str) return true;

//     return str.split('').some((value, index) => {
//         const arr = str.split('')
//         arr.splice(index, 1)
//         const s = arr.join('')

//         const reverse = s.split('').reverse().join('')
//         return reverse === s
//     })
// };

// console.log(validPalindrome('1236621'))


var validPalindrome = function (str) {
    let result = false
    let origin = str.split('')

    if (str.split('') === str.split('').reverse()) return ture

    origin.map((i, index) => {
        const a = Array.from(origin)
        a.splice(index, 1)
        const b = Array.from(a).reverse()
        console.log('a: ', a)
        console.log('b: ', b)

        if (a.join('') === b.join('')) {
            result = true
        }

        // if (sArr.length <= 1) return true
        // sArr.splice(i, 1)
        // let aa = sArr.join('')
        // reArr = aa.split('').reverse()
        // console.log(sArr, reArr)
    })

    return result
};


console.log(validPalindrome('abad'))

