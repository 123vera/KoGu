/**
 * 快速排序
 * number[] 无序数组 
 * number[] return 有序数组
*/

//       [4, 2, 5, 6, 9] ,基准值 5
//       [4, 2, 6, 9] 
// left  [4,2]
// right [6,9]

const quickSort = function (nums) {
    if (nums.length <= 0) return [] // 数组长度为空，则不再处理

    let middIdx = Math.floor((nums.length - 1) / 2) // 基准值下标
    let middVal = nums.splice(middIdx, 1) // 基准值
    let left = []  // 左队列，存放小于基准值的项
    let right = [] // 右队列，存放大于基准值的项

    nums.forEach((element, key) => {
        if (element <= middVal[0]) {
            left.push(element)
        } else {
            right.push(element)
        }
    });
    //  组合返回数组——[左，中，右]
    return [...quickSort(left), ...middVal, ...quickSort(right)]
}

// console.log(quickSort([4, 2, 5, 9]))


/**
 * 冒泡排序
 * number[] 无序数组 
 * number[] return 有序数组
*/
const bubbleSort = function (nums) {
    if (nums.length <= 0) return []

    // i < length - 1 
    // 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
    for (let i = 0; i < nums.length - 1; i++) {
        let hasChange = false // 算法优化， 提前退出冒泡循环的标志位

        // j < length - i - 1 
        // 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
                hasChange = true // // 表示有数据交换
            }

            // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
            if (!hasChange) break
        }
    }

    return nums
}
// console.log(bubbleSort([4, 2, 5, 9]))

/**
 * 归并排序
 * number[] 无序数组 
 * number[] return 有序数组
*/
// 分治思想中的 —— 分
const splitFirst = function (nums) {
    if (nums.length <= 1) return nums
    let middleIdx = Math.floor((nums.length - 1) / 2)
    let left = nums.slice(0, middleIdx)
    let right = nums.slice(middleIdx + 1)

    return mergeSort(splitFirst(left), splitFirst(right))
}

// 分治思想中的 —— 分而治
const mergeSort = function (left, right) {

    let canMerge = left.length && right.length
    let result = []
    console.log('left', left, right)

    // if (left.length === 0) return result.push(right[0])
    // if (right.length === 0) return result.push(left[0])

    while (canMerge) {
        if (left[0] <= right[0]) {
            result.push(right[0])
        }
    }

    return result
}


console.log(splitFirst([4, 2, 5, 9]))


const lsit = [
    {
        status: 0,
        apllyer: 'whm'
    },
    {
        status: 1,
        apllyer: ''
    },
    {
        status: 2,
        apllyer: ''
    },
    {
        status: 3,
        apllyer: ''
    }
]

status: 3




lsit.push({

})