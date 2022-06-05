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
        // children: [
        //     {
        //         id: '02', name: '小亮', pid: "01", job: '产品leader',
        //         children: [
        //             { id: '05', name: '老李 ', pid: "02", job: '韵味-leader' }
        //         ]
        //     },
        //     { id: '03', name: '小妹', pid: "01", job: 'ui-leader' }
        // ]
    }
]

const data1 = [
    { id: '01', name: '大大', pid: " ", job: '项目经理' },
    { id: '02', name: '小亮', pid: "01", job: '产品leader' },
    { id: '03', name: '小妹', pid: "01", job: 'ui-leader' },
    { id: '05', name: '老李 ', pid: "02", job: '韵味-leader' },
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
console.log(arrToTree4(data1))