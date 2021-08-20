import React, { Component } from 'react';
import './index.scss'
import { atRule } from 'postcss';
// import { keyToTestName } from 'jest-snapshot/build/utils';

class Index extends Component {
  componentDidMount() {

    // 算法练习
    // this.leetCode1(1,1,100000)
    this.leetCode1(2, 1118596, 979)

    // this.leetCode2([-1, -1, 2], [0, -1, 2])

    //  arr.flat(depth); depth可以是数字代表变成几维数组（拉平几级），也可以是Infinity关键字（无限级）
    const arr5 = [1, 2, , 4, 5];
    // console.log(arr5.flat())  // [1, 2, 4, 5]

    // new Map()
    // console.log(new Map()) // Map(0) {}
    let myMap = new Map();


    myMap.set('a string')
    myMap.set({})
    myMap.set(function () { })
    // myMap.size; // 3

    myMap.has('a') // false
    myMap.has('a string') // true
    myMap.has({}) // false

    myMap.get('a') // undefined
    myMap.get('a string') // undefined
    // console.log('myMap',myMap.get('a string')) // myMap



    // const arr =[2,7,11,15]
    // const target = 9
    // this.filterArr(arr, target)

    //  console.log(this.intersection([1,2,2,1], [2,2]))


    // this.leetCode4('au') // 2
    this.leetCode4("aab") // 2
    // this.leetCode4('a') // 1
    // this.leetCode4("abcabcbb") // 3
    // this.leetCode4("bwf") // 3
    // this.leetCode4('pwwkew') // 3

  }

  // 给定一个整数数组 nums 和一个目标值 target ，并在该数组中找出和为目标值的那 两个 整数
  filterArr = (arr, target) => {
    let arr2 = []
    arr.map((value, index) => {
      arr.slice(index + 1).map((val) => { //   在剩下的项里查找arr.slice(index+1)
        if (Number(val + value) === target) {
          arr2.push([value, val])
        }
      })
    })

    arr2.map(i => i.sort((a, b) => a - b))
    let result = [...new Set(arr2.flat())]

    return result
  }

  // 该数组中找出和为目标值的那 两个 整数的索引值. 给定一个整数数组 nums 和一个目标值 target
  filterArrIndex = (arr, target) => {
    let arr2 = []
    arr.map((value, index) => {
      arr.slice(index + 1).map((val, ind) => {  //   在剩下的项里查找arr.slice(index+1)
        if (Number(val + value) === target) {
          arr2.push(index, ind + index + 1) //   算上截取之前的项的长度 index+1
        }
      })
    })
    return arr2
  }

  intersection = (...args) => {
    let tarArr
    args.reduce((prev, curr) => {
      tarArr = [...new Set(prev.filter(item => curr.includes(item)))]
    })
    return tarArr
  }

  leetCode1 = (shorter, longer, k) => {
    if (!k) return []
    const arrLength = []

    // k依次递减遍历。等于0，则shorter*0， longer *（3-0）；等于1，则shorter*1， longer *（3-1）； 2则shorter*2， longer *（3-2）；3则shorter*3， longer *（3-3）。 每次生成的3个数字 求和然后 放进数组里
    for (var a = k; a >= 0; a--) {
      arrLength.push(shorter * a + longer * (k - a))
    }

    let LArr = arrLength.filter((num) => Number(num) !== 0)
    console.log('可能的长度', [...new Set(LArr)])
    console.log('最后一项', LArr[LArr.length - 1])
    return [...new Set(LArr)]
  }


  leetCode2 = (square1, square2) => {
    // https://leetcode-cn.com/problems/bisect-squares-lcci/comments/
    //  前提是 这条平分正方形的直线 一定经过正方形的中心

    let s1 = square1 //  [ x1, y1, r1]
    let s2 = square2 // [ x2, y2, r2]

    // 第1步：s1的中心坐标（xc1，yc1）
    const xc1 = s1[0] + s1[2] / 2
    const yc1 = s1[1] + s1[2] / 2

    // 第2步：s2的中心坐标（xc2，yc2）
    const xc2 = s2[0] + s2[2] / 2
    const yc2 = s2[1] + s2[2] / 2


    const k = (yc2 - yc1) / (xc2 - xc1)// 斜率
    const b = yc1 - xc1 * k  // 截距  === yc2 - xc2 * k


    let xD, xU, yD, yU

    // k 斜率不存在
    if (xc1 === xc2) { // k 斜率不存在
      xD = xc1
      xU = xc2

      yD = Math.min(s1[1], s2[1]) // 下面的点 y轴
      yU = Math.max(s1[1] + s1[2], s2[1] + s2[2])// 上面的点 y轴
    }

    // k 斜率存在，包含小于1、大于等于1
    else {

      if (Math.abs(k) <= 1) {
        xD = Math.min(s1[0], s2[0])  // 横坐标 min
        xU = Math.max(s1[0] + s1[2], s2[0] + s2[2]) // 横坐标 max

        yD = k * xD + b
        yU = k * xU + b
      }

      else {
        yU = Math.min(s1[1], s2[1])  // 横坐标 min
        yD = Math.max(s1[1] + s1[2], s2[1] + s2[2]) // 横坐标 max

        xD = (yD - b) / k
        xU = (yU - b) / k


        if (xD <= xU) {
          yU = Math.min(s1[1], s2[1])  // 横坐标 min
          yD = Math.max(s1[1] + s1[2], s2[1] + s2[2]) // 横坐标 max

          xD = (yD - b) / k
          xU = (yU - b) / k

        } else {
          yU = Math.max(s1[1] + s1[2], s2[1] + s2[2]) // 横坐标 max
          yD = Math.min(s1[1], s2[1])  // 横坐标 min

          xD = (yD - b) / k
          xU = (yU - b) / k
        }
      }
    }


    // consosle.log([Number(xD.toFixed(5)), Number(yD.toFixed(5)), Number(xU.toFixed(5)), Number(yU.toFixed(5))])
    return '[' +
      [Number(xD.toFixed(5)), Number(yD.toFixed(5)), Number(xU.toFixed(5)), Number(yU.toFixed(5))]
        .toString() + ']'
  }

  leetCode3 = (s) => {
    if (s === " ") return 1
    // abcac 第一位是否相同，相同就比较第二位是否相同，如果不同就reture第一第二，相同则继续比较第三位是否一样
    const arr = s.split('')
    const sArr = [] // 存放重复项之间的项
    arr.map((value, index) => {
      console.log(arr.slice(index + 1))

      arr.slice(index + 1).map((val, ind) => {

        if (val === value) {
          const rStr = ind + (index + 1) // 与当前项值重复的下标

          sArr.push(s.substring(index, rStr))

          sArr.sort((a, b) => b.length - a.length)

        }
      })
    })
    console.log('sArr', sArr[0], Array.from(new Set(sArr[0])).join('').length)
    return Array.from(new Set(sArr[0])).join('').length
  };

  leetCode4 = (s) => {
    let curr = 0
    let next = 0
    let maxLengArr = []
    console.log('===============leetCode4==============')
    if (next <= s.length) {

      for (let i = 0; i < s.length; i++) {
        // console.log(next , s.length-1, s.slice(i+1).indexOf(s[i]) > -1, s.slice(i+1).indexOf(s[i])+i+1)

        curr = i

        next = s.slice(i + 1).indexOf(s[i]) > -1 ? s.slice(i + 1).indexOf(s[i]) + i + 1 : s.length - 1

        console.log('s.slice(curr, next)', curr, next, s.slice(curr, next))

        maxLengArr.push(s.slice(curr, next))
      }
      curr++


      console.log('maxLengArr', maxLengArr)

      // console.log(Math.max(...maxLengArr))

      return Math.max(...maxLengArr)
    }

  }

  render() {
    return (
      <div className='inter'>
        <h2>js题目</h2>
        <br />
        <ul>
          <li>
            <p>1.编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组</p>
            <code>
              var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
              <br />
              const flatArr = arr.flat(Infinity) --拉平（扁平）数组<br />
              const notRepeat = Array.from((new Set(flatArr))) --去重<br />
            const sortArr = notRepeat.sort((a, b) => a-b) // 升序
            </code>
          </li>

          <li>
            <p>2.给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p>
            <small>
              初始化一个 map = new Map();
              <br />
              从第一个元素开始遍历 nums;
              <br />
              获取目标值与 nums[i] 的差值，即 k = target - nums[i] ，判断差值在 map 中是否存在;
              <br />
              不存在（ map.has(k) 为 false ） ，则将 nums[i] 加入到 map 中（key为nums[i], value为 i ，方便查找map中是否存在某值，并可以通过 get 方法直接拿到下标）
              存在（ map.has(k) ），返回 [map.get(k), i] ，求解结束;
              <br />
              遍历结束，则 nums 中没有符合条件的两个数，返回 [].
            </small>
            <code>
              <br />
              调用封装函数返回2个整数this.filterArr()，见代码 => 值为{ this.filterArr([3, 2, 4], 6) } 或 { this.filterArr([2, 7, 11, 15], 9) }或 { this.filterArr([-1, -2, -3, -4, -5], -8) }或
              <br />
              调用封装函数返回2个整数下标this.filterArrIndex()，见代码 => 值为{ this.filterArrIndex([3, 2, 4], 6) } 或 { this.filterArrIndex([2, 7, 11, 15], 9) }或 { this.filterArrIndex([-1, -2, -3, -4, -5], -8) }或
            </code>
          </li>

          <li>
            <p>3.给定两个数组，编写一个函数来计算它们的交集</p>
            <code>
            const tt = arr1.filter(i =>  arr2.includes(i) )
              <br />
              console.log(new Set(tt))
            </code>
          </li>

          <li>
            <p>4.你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。返回的长度需要从小到大排列。</p>
            <small>
              输入：
              shorter = 1
              longer = 2
              k = 3
              输出：{ `{3,4,5,6}` }
            </small>
            <br />
            <code>方法见：leetCode1()</code>
          </li>

          <li>
            <p>5.给定两个正方形及一个二维平面。请找出将这两个正方形分割成两半的一条直线。假设正方形顶边和底边与 x 轴平行。

              每个正方形的数据square包含3个数值，正方形的左下顶点坐标[X,Y] = [square[0],square[1]]，以及正方形的边长square[2]。所求直线穿过两个正方形会形成4个交点，请返回4个交点形成线段的两端点坐标（两个端点即为4个交点中距离最远的2个点，这2个点所连成的线段一定会穿过另外2个交点）。2个端点坐标[X1,Y1]和[X2,Y2]的返回格式为{ `{X1,Y1,X2,Y2}` }，要求若X1 != X2，需保证{ 'X1 < X2' }，否则需保证{ 'Y1 <= Y2' }。

              若同时有多条直线满足要求，则选择斜率最大的一条计算并返回（与Y轴平行的直线视为斜率无穷大）。
            </p>
            <small>
              输入：
              square1 = { `{-1, -1, 2}` }
              square2 = { '{0, -1, 2}' }
              输出： { '{-1,0,2,0}' }
              解释： 直线 y = 0 能将两个正方形同时分为等面积的两部分,返回的两线段端点为[-1,0]和[2,0]
            </small>
            <br />
            <code>方法见：leetCode2() => </code>

            <span>
              {/* [15.00000,212.00000,252.94737,-199.00000] */ }
              { this.leetCode2([249, -199, 5], [-1, 136, 76]) }
            </span>

            <span>
              {/* [-61.22460,-235.00000,70.64706,176.00000]  */ }
              { this.leetCode2([-176, -235, 338], [-2, 66, 110]) }

            </span>
          </li>

          <li>
            <p>6.给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。</p>

            <code>
              示例：
              <br />
              输入: "abcabcbb" 或 “pwwkew”
              <br />
              输出: 3  或 3
              <br />
              解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
              <br />
              或 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
            </code>
            <br />
            <span>方法见 function leetCode3（） =>
              {/* {this.leetCode3('abcabcbb')}  */ }
              {/* 或 {this.leetCode3(' ')}  */ }
              或 { this.leetCode3('c') }
              {/* 或 {this.leetCode3('pwwkew')} */ }
            </span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Index