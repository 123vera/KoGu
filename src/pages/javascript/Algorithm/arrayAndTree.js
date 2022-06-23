const { default: Axios } = require("axios")
const { start } = require("repl")

// 转成Tree
const data = [
    { id: '01', name: '大大', pid: "", job: '项目经理' },
    { id: '02', name: '小亮', pid: "01", job: '产品leader' },
    { id: '03', name: '小妹', pid: "01", job: 'ui-leader' },
    { id: '04', name: '老妈', pid: "01", job: '测试-leader' },
    { id: '05', name: '老李 ', pid: "02", job: '韵味-leader' },
    // { id: '06', name: '老张', pid: "02", job: '测试-leader' },
    // { id: '07', name: '小路 ', pid: "03", job: '设计' },
    // { id: '08', name: '小高', pid: "04", job: 'ui' },
    // { id: '09', name: '小刘', pid: "04", job: 'ui1' },
]



const tree1 = [
    {
        id: '01', name: '大大', pid: "", job: '项目经理',
        children: [
            {
                id: '02', name: '小亮', pid: "01", job: '产品leader',
                children: [
                    { id: '05', name: '老李 ', pid: "02", job: '韵味-leader' }
                ]
            },
            { id: '03', name: '小妹', pid: "01", job: 'ui-leader' }
        ]
    }
]

const data1 = [
    { id: '01', name: '大大', pid: " ", job: '项目经理' },
    { id: '02', name: '小亮', pid: "01", job: '产品leader' },
    { id: '03', name: '小妹', pid: "01", job: 'ui-leader' },
    { id: '05', name: '老李 ', pid: "02", job: '韵味-leader' },
]

[
    {
        id: '01', name: '大大', pid: " ", job: '项目经理',
        children: [
            {
                id: '02', name: '小亮', pid: "01", job: '产品leader',
                children: [{ id: '03', name: '小妹', pid: "01", job: 'ui-leader' }]
            }
        ]
    }
]

function setItem(tree, item) {
    for (let i = 0; i < tree.length; i++) {
        const curr = tree[i]
        if (curr.id === item.pid) {
            curr.children = [...(curr.children || []), item]
            return tree
        }
        if (curr.children) {
            curr.children = setItem(curr.children, item)
        }
    }
    return tree
}

const arrToTree = (arr) => {
    let res = []

    arr.forEach(ele => {
        if (ele.pid === '') {
            res.push(ele)
            return
        }
        res = setItem(res, ele)
    });

    return res
}


// console.log(arrToTree(data1))

function arrToTree2(list, id = 0) {
    return list.reduce((prev, curr) => {
        if (curr.pid === id) {
            curr.children = arrToTree2(list, curr.id)
            prev.push(curr)
        }
        return prev
    }, [])
}
// console.log(arrToTree2(data1, ''))


/**
 * 树形结构 拍平
 * 补充while实现https://juejin.cn/post/7099268171286183972
*/
function treeToArr2(tree = []) {
    return tree.reduce((prev, curr) => {
        let items = curr.children
        delete curr.children
        prev.push(curr)

        if (items.length > 0) {
            let item = treeToArr2(items)
            prev.push(...item)
        }

        return prev
    }, [])
}

// console.log(treeToArr2(arrToTree2(data1, '')))

/**
 * Map 思想实现
 * 以id为key Map数据结构
*/
function arrToTree3(list, id) {
    let map = new Map()
    let result = []

    list.forEach((item) => {
        map.set(item.id, item)
        let parent = map.get(item.pid)

        if (parent) {
            parent.children = [...(parent.children || [])]
            parent.children.push(item)
        } else {
            result.push(item)
        }

    })
    return result
}

/**
 * Map 思想实现
 * 以pid为key Map数据结构
 * 
*/
function arrToTree4(list) {
    let map = new Map()
    let result = []

    list.forEach((item, index) => {
        map.set(item.pid, [...(map.get(item.pid) || []), item])
    })

    list.forEach((item, index) => {
        if (map.get(item.id)) {
            let sons = map.get(item.id)
            item.children = [...(item.children || []), ...sons]
        }
    })

    result.push(list[0]) // 有问题，思路不清晰 改天看

    return result
}

// console.log(listToTree(data1, { branch: 'children' }))
// console.log(arrToTree4(data1))

function timeOutNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20)
        }, 500)
    })

}

// function fn1() {
//     // return timeOutNum()
//     let b
//     timeOutNum().then(res => {
//         console.log(111)
//         b = res
//         return res
//     })
//     console.log(222)

//     // axios.get('/url')
//     return b
// }

async function fn(b) {
    //   const res = await  axios.get('/url')
    const res = await timeOutNum()
    console.log('res', res)

    return b + res
}

// console.log(fn(10).then(res => console.log(res))) // 
// [2,1,1,3, 2,1,1,3]  // 3
// const arr = [2, 1, 1, 3, 2, 1, 1, 3] //3
// const arr = [7, 1, 3, 1, 2, 4, 3, 7] //5
const arr = [7, 1, 3, 4, 7, 4, 3, 7] //4
// [2,1,1,3,2,3] // 3

// length = 5
//        [7, 1, 3, 3, 7, 4, 3, 7]
// key     0  1  2  3  4  5  6  7
// sta     1  2  3  4  5  6  1  3
// min     1  
// max     1  2  3  4  5  4  4  4

// length = 4
//        [7, 1, 3, 4, 7, 4, 3, 7]
// key     0  1  2  3  4  5  6  7
// sta     1  2  3  4  1  2  3  4
// min     1  
// max     1  2  3  4  4  4  4  4

// length = 5
//        [7, 1, 3, 1, 2, 4, 3 ]
// key     0  1  2  3  4  5  6  7
// sta     1  2  3  1  2  3  4  5
// min     1  
// max     1  2  3  3  3  3  4  5

// length = 3
//        [2, 1, 1, 3, 2, 1, 1, 3]
// key     0  1  2  3  4  5  6  7
// max     1  2  1  2  3  1  1  2
// min     1  

// 差值    -

function calShortest(arr) {
    let target = []
    let min = Math.min(...arr) // 1
    let max = min  // 0
    let start = 0


    arr.forEach((val) => {
        target.push(val)

        if (target.includes(val)) {
            if ((val <= min) || val === Math.max(...arr)) {
                start = 1
            } else {
                start += 1
            }
        } else {
            start += 1
        }

        max = Math.max(max, start)
    })
    return max

}
// console.log(calShortest(arr))

function treeToArrTest(tree) {
    return tree.reduce((prev, curr) => {
        let items = curr.children || []
        delete curr.children
        prev.push(curr)

        if (items.length > 0) {
            let item = treeToArrTest(items)
            prev.push(...item)
        }

        return prev
    }, [])
}
console.log('treeToArrTest::', treeToArrTest(tree1))
