import React, { Component } from 'react';
// import JsTool from './../components/common/JsTool'
import './index.scss'
// import { keyToTestName } from 'jest-snapshot/build/utils';

class Index extends Component {
  componentDidMount (){

    //  arr.flat(depth); depth可以是数字代表变成几维数组（拉平几级），也可以是Infinity关键字（无限级）
    const arr5 = [1, 2,  , 4, 5];
    console.log(arr5.flat())  // [1, 2, 4, 5]


    // new Map()
    console.log(new Map()) // Map(0) {}
    let myMap = new Map();


    myMap.set('a string')
    myMap.set({})
    myMap.set(function() {})
    // myMap.size; // 3

    myMap.has('a') // false
    myMap.has('a string') // true
    myMap.has({}) // false

    myMap.get('a') // undefined
    myMap.get('a string') // undefined
    console.log('myMap',myMap.get('a string')) // myMap

    

    const arr = [2, 7, 11, 1,12, 15]
    const target = 13
   this.filterArr(arr, target)

   console.log(this.intersection([1,2,2,1], [2,2]))
  }

  // 给定一个整数数组 nums 和一个目标值 target ，并在该数组中找出和为目标值的那 两个 整数
  filterArr = (arr, target) => {
    let arr2 = []
    arr.map(value => {
      if(arr.includes(Number(target - value))) {
        arr2.push([value, Number(target - value)])
        }
    })
    arr2.map(i => i.sort((a,b) => a-b))
    let result = new Map(arr2)
    return [...result]
  }

  intersection = (...args) => {
    let tarArr
    args.reduce((prev, curr)=> {
    tarArr = [...new Set(prev.filter(item => curr.includes(item)))]
    })
    return tarArr
  }

  render (){
    return (
      <div className='inter'>
       <h2>js题目</h2>
       <br/>
        <ul>
          <li>
            <p>1.编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组</p>
            <code>
            var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
            <br/>
            const flatArr = arr.flat(Infinity) --拉平（扁平）数组<br/> 
            const notRepeat = Array.from((new Set(flatArr))) --去重<br/>
            const sortArr = notRepeat.sort((a, b) => a-b) // 升序
            </code>
          </li>

          <li>
            <p>2.给定一个整数数组 nums 和一个目标值 target ，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</p>
            <small>
                初始化一个 map = new Map();
                <br/>
                从第一个元素开始遍历 nums;
                <br/>
                获取目标值与 nums[i] 的差值，即 k = target - nums[i] ，判断差值在 map 中是否存在;
                <br/>
                不存在（ map.has(k) 为 false ） ，则将 nums[i] 加入到 map 中（key为nums[i], value为 i ，方便查找map中是否存在某值，并可以通过 get 方法直接拿到下标）
                存在（ map.has(k) ），返回 [map.get(k), i] ，求解结束;
                <br/>
                遍历结束，则 nums 中没有符合条件的两个数，返回 [].
            </small>
            <code>
              <br/>
              调用封装函数this.filterArr()，见代码
            </code>
          </li>

          <li>
            <p>3.给定两个数组，编写一个函数来计算它们的交集</p>
            <code>
            const tt = arr1.filter(i => arr2.includes(i) )
            <br/>
                console.log(new Set(tt))
            </code>
          </li>

       
        </ul>
      </div>
    )
  }
}

export default Index