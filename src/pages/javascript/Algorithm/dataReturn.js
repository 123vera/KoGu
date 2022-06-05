

//-----------------------------------------------------------------------
// 计算列表包含的元素数
function incluedeNums(arr) {
    let mapArr = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (mapArr.get(arr[i])) {
            mapArr.set(arr[i], mapArr.get(arr[i]) + 1)
        } else {
            mapArr.set(arr[i], 1)
        }
    }

    return Object.fromEntries(mapArr)
}

incluedeNums([2, 2, 3, 4, 2])

//-----------------------------------------------------------------------
// 找出列表最大的数字
function findMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i])
    }

    return max
}
console.log('findMax', findMax([2, 3, 4]))


//-----------------------------------------------------------------------
// 编写sum函数的代码
function sum(arr) {
    let sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
// console.log('sum', sum([2, 3, 4]))
//-----------------------------------------------------------------------
const arr2 = [0, 1, 2, -1]  // 3
const arr3 = [-1, 2, 3, -1] // 5
const arr4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4] // 6
const arr5 = [5, 4, -1, 7, 8] // 23

function calcMax(nums) {
    let currSum = 0
    let arr = []

    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i])
        arr.push(currSum)
    }

    return Math.max(...arr)
}

// console.log(calcMax([-1, -2]))

//-----------------------------------------------------------------------

//  返回数据
const arr1 = {
    rows: [
        ["Lisa", 16, "Female", "2000-12-01"],
        ["Bob", 22, "Male", "1996-01-21"]
    ],
    metaData: [
        { name: "name", note: '' },
        { name: "age", note: '' },
        { name: "gender", note: '' },
        { name: "birthday", note: '' }
    ]
}

// 期望数据
const arr1Transfer = [
    { name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
    { name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
]

function index(arr) {
    const { rows, metaData } = arr

    const rowArr = rows.map((row) => {
        const result = {}
        for (let i = 0; i < metaData.length; i++) {
            result[metaData[i].name] = row[i]
        }
        return result
    })
    return [...rowArr]
}

// console.log(index(arr1))

function mergeKeyData(data) {
    const { metaData, rows } = data
    return rows.map(row => {
        const result = {}
        Object.keys(metaData).forEach((key, index) => {
            result[metaData[key].name] = row[index]
        })
        return result
    })
}


