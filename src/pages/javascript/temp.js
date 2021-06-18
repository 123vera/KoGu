
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
console.log(returnBonusType(areas))


// {
//     '11': [ 111, 112 ],
//     '12': [ 121 ],
//     '21': [ 211, 212 ],
//     '22': [ 221 ],
//     '31': [ 311, 312, 313, 314 ]
//   }
