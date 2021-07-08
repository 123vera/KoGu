const areas = [
    {
        id: 1,
        typeId: 1,
        name: '北京',
        children: [
            {
                id: 11,
                typeId: 2,
                name: '市1',
                children: [{
                    id: 111,
                    typeId: 3,
                    name: '苍坪区'
                }, {
                    id: 112,
                    typeId: 3,
                    name: '还顶区'
                }],
            },
            {
                id: 12,
                typeId: 2,
                name: '市2',
                children: [{
                    id: 121,
                    typeId: 3,
                    name: '乐山区'
                }]
            },
        ]
    }, {
        id: 2,
        typeId: 1,
        name: '上海',
        children: [
            {
                id: 21,
                typeId: 2,
                name: '市1',
                children: [{
                    id: 211,
                    typeId: 3,
                    name: '黄埔区'
                }, {
                    id: 212,
                    typeId: 3,
                    name: '浦东区'
                }],
            },
            {
                id: 22,
                typeId: 2,
                name: '县',
                children: [{
                    id: 221,
                    typeId: 3,
                    name: '崇明县'
                }]
            },
        ]
    },
    {
        id: 3,
        typeId: 1,
        name: '浙江省',
        children: [
            {
                id: 31,
                typeId: 2,
                name: '杭州市',
                children: [{
                    id: 311,
                    typeId: 3,
                    name: '上城区'
                }, {
                    id: 312,
                    typeId: 3,
                    name: '下城区'
                }, {
                    id: 313,
                    typeId: 3,
                    name: '滨江区',
                    children: [{
                        id: 3131,
                        typeId: 4,
                        name: '县1',
                    }, {
                        id: 3132,
                        typeId: 4,
                        name: '县2',
                    }]
                }, {
                    id: 314,
                    typeId: 3,
                    name: '萧山区'
                }],
            }
        ]
    }
]

const list = [212, 31, 311, 312, 313, 314] // 
const data = {
    id: 0,
    rId: 2,
    list: [212, 31, 311, 312, 313, 314],
    // type: ,
}
const l = [{ children: [11, 111, 112, 12] }, { children: [6, 7, 8] }, { children: [9] }]
const arr1 = [1, 2, 3, 4], arr2 = [1, 2, 3, 6, 8], result = []

let mapArr = (areasArr) => {
    let idxs = []
    areasArr.forEach(area => {
        idxs.push(area.id)
        if (area.children) {
            idxs.push(...mapArr(area.children))
        }
    })
    return idxs
}
mapArr(areas)

let rr = areas.map(i => {
    return {
        id: i.id,
        children: mapArr(i.children)
    }
})
// console.log('rr: ', rr)

function getIds(list) {
    const res = []
    list.forEach(i => {
        res.push(i.id)
        if (i.children) {
            res.push(...getIds(i.children))
        }
    })
    return res
}

const l1 = areas.map(i => {
    return {
        id: i.id,
        children: i.children ? getIds(i.children) : []
    }
})
// console.log(getIds(areas))
// console.log(l1)


function findCount(list, target) {
    let count = 0
    let result = []
    list.forEach((i, index) => {
        if (target === i) {
            count++
            result.push(index)
        }
    })
    return {
        count,
        result,
    }
}
let arr3 = [2, 3, 4, 6, 4, 56, 4]
// console.log(findCount(arr3, 4))

function arr1IncludeArr2(selects, items) {
    return items.every(i => {
        return selects.includes(i)
    })
}
// console.log(arr1IncludeArr2([1, 2, 3, 4], [4, 3]))


// 找出数组的共同项
function compareNumber(arr1, arr2) {
    let sArr = arr1.concat(arr2)
    let map = new Map(), res = [];

    for (n of sArr) {
        //统计每个元素出现的次数
        map.set(n, map.has(n) ? map.has(n) + 1 : 1);

        if (map.get(n) === 2) {
            res.push(n);
        }
    }
    return res;
}
// console.log('---', compareNumber([0, 1, 2], [4, 2, 5, 1]))

function returnBonusType(treeList) { // checkedKeys
    let targetArr = new Map()

    const mapTree = (treeList) => {
        treeList && treeList.forEach(item => {
            if (item.typeId < 2) {
                return mapTree(item.children)
            }

            if (item.typeId === 2) {
                targetArr.set(item.id, item.children.map(i => i.id))
            }
        })
    }
    mapTree(treeList)
    console.log(targetArr, targetArr.entries())
    return Object.fromEntries(targetArr.entries())
}
// console.log(returnBonusType(areas))


// {
//     '11': [ 111, 112 ],
//     '12': [ 121 ],
//     '21': [ 211, 212 ],
//     '22': [ 221 ],
//     '31': [ 311, 312, 313, 314 ]
//   }


const obj1 = {
    name: '名字',
    status: '状态'
}
const obj2 = {
    name: '张张',
    status: '不错'
}

function transformObj(obj1, obj2) {
    let resultObj = {}

    Object.keys(obj1).map((i) => {
        resultObj[obj1[i]] = obj2[i]
        return resultObj
    })
}
// { '名字': '张张', '状态': '不错' }

transformObj(obj1, obj2)


let s = 'aba'  // 'aba' - true；"abcaf" - false; 'bebeb' - true; "cbbcc" - true


function isPalindrome(str, i, j) {
    let length = j - i + 1
    for (let k = 0; k < length; k++) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('abbda', 0, 4))

// 最多删除一个字符，是否回文 （ ）
function resultString(str) {
    let i = 0, j = str.length - 1
    // let reStr = str.split('').reverse().join('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[j]) {
            while (i < j) {
                return isPalindrome(str, i, j - 1) || isPalindrome(str, i + 1, j)
            }
        }
    }
    return false
}

// console.log(resultString(s))

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function (s) {
    //  方法一
    // let preStr = '', curStr = ''
    // for (let i = 0; i < s.length; i++) {
    //     let index = curStr.indexOf(s[i])

    //     if (index > -1) {
    //         curStr = curStr.slice(index + 1)
    //     }

    //     curStr += s[i]
    //     preStr = preStr.length > curStr.length ? preStr : curStr
    // }
    // return preStr.length



    //  方法二
    const dic = new Map()  // 字符字典
    let minIndex = 0       // 左指针
    let curIndex           // 即当前字符上次出现的索引 , 当前字符在 map 中存放的索引
    let maxLength = 0      // 历史最大长度

    for (let i = 0; i < s.length; i++) { // i 充当右指针
        curIndex = dic.get(s[i])
        // 如果某字符的index 比上一次出现的index大，那么左指针从currIndex+1 处开始
        if (curIndex >= minIndex) {
            minIndex = curIndex + 1  // 将左指针移动到上此出现的索引的下一位，缩小当前窗口
        }

        dic.set(s[i], i)  // 将当前字符存放到 map 中，并记录最新索引
        maxLength = Math.max(i + 1 - minIndex, maxLength)   // 将当前统计的不重复字符串的长度与历史不重复字符串的长度对比，存储最大值
    }
    return maxLength
};

// console.log(lengthOfLongestSubstring('abcbabcb'))  // 3  无重复字符的最长子串是 "abc"，所以其长度为 3
