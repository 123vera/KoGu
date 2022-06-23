function go(...arg1) {
    let str = 'go'
    const add = function (...arg2) {
        if (!arg2[0]) {
            str += 'o'
            return add
        } else {
            return str += arg2[0] // goooo + l
        }
    }

    return add(...arg1)
}

go('l') // gol

go() // add() str = goo

go()() // add() str = gooo

go()()() // add() str = goooo

go()()()('l') // add() str = gooool

// console.log(go()()()()('l')) // add() str = goooool


// 算法题1
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            // console.log(i);
        }, 1000)
    })(i)
} // 0 1 2 3 4



// 输出i成立
var i = {
    a: 1,
    toString: function () {
        return i.a++;
    }
}
if (i == 1 && i == 2 && i == 3) {
    console.log(1);
}

// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]
let random = [2, 10, 3, 4, 5, 11, 10, 11, 20]
let obj = []

function generateArr(list) {
    let obj = [[], [], []]
    let first = 0
    list.forEach(val => {
        if (val >= 10) {
            first = ('' + val).slice(0, 1)
        } else {
            first = 0
        }
        obj[first] = [...obj[first], val]
    })
    return obj
}

// console.log('generateArr', generateArr(random))


function deepClone(obj) {
    let obj1 = {}

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            obj1[i] = deepClone(obj[i])
        }
    }
}


function print(n) {
    // setTimeout(() => {
    //     // console.log(n);
    //     // }, n * 99);
    // }, 1, Math.floor(Math.random() * 1000));

    setTimeout(() => {
        // console.log(i);
    }, 1000)
}

for (var i = 0; i < 100; i++) {
    print(i);
}

// 翻转链表
function reverseList(head) {
    let result = null
    let curr = head
    while (curr) {
        const temp = curr.next
        curr.next = result
        result = curr
        curr = temp
    }
    return result
}

const head = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
// console.log(reverseList(head))



// 扁平数据转tree， 方法1
const list = [
    { id: 1, pid: 0, name: '四川' },
    { id: 3, pid: 1, name: '绵羊' },
    { id: 4, pid: 1, name: '德阳' },
    { id: 5, pid: 2, name: '高新区' },
    { id: 6, pid: 2, name: '翠屏区' },
]

let tree = [
    {
        id: 1, pid: 0, name: '四川',
        items: [
            {
                id: 2, pid: 1, name: '成都', items: [
                    { id: 5, pid: 2, name: '高新区' },
                    { id: 6, pid: 2, name: '翠屏区' },
                ]
            },
            { id: 3, pid: 1, name: '绵羊' },
            { id: 4, pid: 1, name: '德阳' },
        ]
    }
]

function addItem(tree, item) {
    return tree.map(i => {
        if (i.id === item.pid) {
            i.items = [...(i.items || []), item]
            return i
        }
        if (i.items && i.items.length > 0) {
            addItem(i.items, item)
        }
        return i
    })
}

function listToTree(list) {
    return list.reduce((prev, curr) => {
        console.log(prev, curr)
        if (curr.pid === 0) {
            return [...prev, curr]
        }

        return addItem(prev, curr)
    }, [])
}

// tree 转 扁平数据， 方法1
function treeToList(tree) {
    return tree.reduce((prev, curr) => {
        const { items = [] } = curr
        delete curr.items
        prev.push(curr)

        if (items.length > 0) {
            prev.push(...treeToList(items))
        }

        return prev
    }, [])
}
// console.log(listToTree(list))
// console.log(treeToList(tree))


// 扁平数组转tree，方法2
function findItem(id, sonChild, list) {
    list.forEach(i => {
        if (i.pid === id) {
            let newChild = { ...i, children: [] }
            sonChild = sonChild || []
            sonChild.push(newChild)
            findItem(i.id, newChild.children, list)
        }
    })
}
function list2ToTree(list) {
    let result = []

    result.push(list.find(i => i.pid === 0))
    result.forEach(i => {
        i.children = []
        findItem(result[0].id, i.children, list)
    })
    return result
}
// console.log('list2ToTree', list2ToTree(list))


/**
* 转换方法
*/
const arrayToTree1 = (data, pid) => {
    const result = [];

    // 递归查找，获取children
    const getChildren = (result, id) => {
        for (const item of data) {
            if (item.pid === id) {
                const newItem = { ...item, children: [] };
                result.push(newItem);
                // result.push(newItem);
                getChildren(newItem.children, item.id);
            }
        }
    }
    getChildren(result, pid)

    return result;
}

// console.log('+++++++')
// console.log(JSON.stringify(arrayToTree1(list, 0)))


// 扁平数组转tree（真题）
let arrList = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

const arrayToTree = function (nums, id) {
    let result = nums.reduce((prev, curr) => {
        // 1
        // prev : []
        // cur : { id: 1, name: '部门1', pid: 0 }
        if (curr.pid === id) {
            const items = arrayToTree(nums, curr.id)
            curr.items = items
            prev = [...prev, curr]
        }
        // console.log('prev', prev)
        return prev
    }, [])

    return result
}

// console.log('=========')
// console.log('arrayToTree', arrayToTree(arrList, 0))



// prev  []  
//       [{id:1,name:,pid:0,items:[]}]
//   [{id:1,name:,pid:0,items:[
//         { id: 2, name: '部门2', pid: 1 },
//         { id: 3, name: '部门3', pid: 1 },
//    ]}]
// curr  arrList1[0]
//       arrList1[1]

let arrList1 = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 999, name: '部门999', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

const arrToTree = (list, id) => {
    return list.reduce((prev, curr) => {
        if (curr.pid === id) {
            curr.items = arrToTree(list, curr.id)
            prev = [...prev, curr]
        }

        return prev
    }, [])
}

// [{ 
//    id: 1, name:, pid: 0,
//    items: [
//         { id: 2, name: '部门2', pid: 1, items:[] },
//         { id: 3, name: '部门3', pid: 1 },
//  ]}]


const treeToArr = (list) => {

    return list.reduce((prev, curr) => {
        let items = curr.items
        delete curr.items
        prev.push(curr)

        if (items) {
            let flatArr = treeToArr(items)
            prev.push(...flatArr)
        }

        return prev
    }, [])
}

console.log(arrToTree(arrList1, 0))
console.log('treeToArr', treeToArr(arrToTree(arrList1, 0)))


// 最长公共前缀1
/**
 * @param {string[]} strs
 * @return {string}
 * 横向对比
 */
var longestCommonPrefix = function (strs) {
    let compire = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i]
        for (let j = 0; j < compire.length; j++) {
            if (compire[j] !== str[j]) {
                compire = str.slice(0, j)
                break
            }
        }
    }
    return compire
};


// 最长公共前缀2
/**
 * @param {string[]} list
 * @return {string}
 * 纵向对比
 */
var longestCommonPrefix = function (list) {
    const first = list[0]

    let str = ''
    let index = 0
    while (true) {
        const char = first[index]
        if (!char) return str
        const pass = list.every(str => str[index] === char)
        if (pass) {
            str += char
            index++
        } else {
            return str
        }
    }
};
// 最长公共前缀3
/**
 * @param {string[]} list
 * @return {string}
 * 纵向对比
 */
var longestCommonPrefix = function (list) {
    let result = ''

    for (let i = 0; i < list[0].length; i++) {
        const letter = list[0][i]

        for (let j = 0; j < list.length; j++) {
            if (list[j][i] !== letter) {
                return result
            }
        }
        result += letter
    }

    return result
}

//      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// res [0:[1,2],1:[]]


function setData(arr, len) {
    let result = [[]]
    let group = 0

    // [1, 2, 3, 4, 5, 6, 7, 8]

    // for (let i = 0; i < arr.length; i++) {
    //     const j = Math.floor(i / len)
    //     result[j] = [...(result[j] || []), arr[i]]
    // }


    // return result


    for (let i = 0, leng = arr.length; i < leng; i++) {
        if (i % len === 0 && i !== 0) {
            group++
            result[group] = [arr[i]]
        } else {
            result[group] = [...(result[group] || []), arr[i]]
        }
    }
}

let data = Array.from({ length: 100 }, (_, key) => key + 1)
setData(data, 20)

