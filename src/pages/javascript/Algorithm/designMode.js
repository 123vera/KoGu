const { useState } = require("react")

// 设计模式手写代码 、时间循环机制 例子学习
function Singleton(name) {
    this.name = name
    this.instance = null
}
Singleton.prototype.getName = function (name) {
    console.log(name)
}


// Singleton = {
//     name: name,
//     instance: null,
//     getName: function (name) {

//     }
// }

Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}


let a = Singleton.getInstance('aa')
let b = Singleton.getInstance('bb')

// console.log(a, b)


// // ------------------------------------

// 观察者模式 
/**
 * 观察者角色（observe）、被观察者（subject）
*/

let Subject = function () { this.observers = [] }

Subject.prototype = {
    // 添加观察者
    add: function (observer) {
        this.observers.push(observer)
    },

    // 移除观察者
    remove: function (observer) {
        let observers = this.observers
        observers.forEach((o, index) => {
            if (o === observer) {
                observers.splice(index, 1)
            }
        });
    },

    // 通知观察者
    notify: function (key) {

        // 通知全部观察者
        for (let i = 0; i < Observers.length; i++) {
            Observers[i].update()
        }
    }
}

let Observers = function (name) {
    this.name = name
}
Observers.prototype = {
    update: function (msg) {
        console.log('通知O, S变化了' + msg)
    }
}




// // 发布-订阅
// /**
//  * 以事件通道作为代理关卡，包含订阅、取消订阅、发布3种行为
// */

// function PubSub() {
//     this.eventList = {
//         // 'sing': [fn1, fn2],
//         // 'write':[fn1,fn2,fn3,fn4]  // 一个主题下可以订阅多个事件
//     } // 事件队列
// }

// PubSub.prototype = {
//     // 订阅
//     subscribe: function (name, fn) {
//         if (!this.eventList.hasOwnProperty(name)) {
//             this.eventList[name] = []
//         }
//         this.eventList[name].push(fn)
//     },
//     // 取消订阅
//     unSubscribe: function (name, fn) {
//         let eve = this.eventList[name]
//         let eveIndex = eve.findIndex(i => i === fn)

//         // 取消某个
//         eve.splice(eveIndex, 1)
//     },

//     // 发布
//     publish: function (name, params) {
//         let eve = this.eventList[name] || []

//         if (eve.length <= 0) {
//             console.log('该name下的事件队列为空')
//             return
//         }
//         for (let i = 0; i < eve.length; i++) {
//             eve[i](params)
//         }
//     }
// }

// let Pub = new PubSub()

// Pub.subscribe('sing', function (name) {
//     console.log('sing 订阅者01 歌名为 ', name)
// })
// Pub.unSubscribe('sing', () => { })
// Pub.publish('write', '书法')


// function body(name) {
//     console.log(name)
// }

// function agency(name) {
//     if (name !== 'wang') {
//         body(name)
//     }
// }

// let reg = /(\w)\1+/g;
// let str = 'vbbbbhybbfhbbgbbb'
// console.log('正则', str.match(reg))




// c()

// var c = function () {
//     console.log('c')
// }

// function c() {
//     console.log('a')
// }



// async function fun1(a, b) {
//     return a + b
// }

// async function fun2(v) {
//     return v * 10
// }

// async function run() {
//     const result1 = await fun1(1, 2).then(r => r * 2).then(r => r * 2)
//     console.log('result1: ', result1)

//     const result2 = await fun2(result1)
//     console.log('result2: ', result2)
// }

// run()


// async function a1() {
//     await test()
// }

test()

// ['aaaaa','ccccc']

// ['ccccc']

// ['ccccc','fffff']

// ['fffff','ddddd']

// ['ddddd']

// []

// ['eeeee']

async function test() {
    new Promise(function (resolve) {
        console.log('323')
        resolve() // 1
    }).then(function () {
        console.log('aaaaa'); // 
    }).then(() => {
        console.log('fffff')
    })

    new Promise(function (resolve) {
        console.log('bbbbb'); // 2
        resolve();
    }).then(() => {
        // console.log(+new Date())
        console.log('ccccc')
    }).then(() => {
        console.log('dddddd')
    }).then(() => {
        console.log('eeeeee')
    })
    // return undefined
}
// a1()

// [1,2,3,4,5]

// async function async1() {
//     console.log('async1 start');
//     await async2().then(function () {
//         console.log('promise33');
//     });;
//     console.log('async1 end');
// }
// async function async2() {
//     //async2做出如下更改：
//     (new Promise(function (resolve) {
//         console.log('promise1');
//         resolve();
//     }).then(function () {
//         console.log('promise2');
//         console.log('promise33');
//     })).then(function () {
//         console.log('promise22');
//     });
// }
// console.log('script start');

// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
// async1();

// new Promise(function (resolve) {
//     console.log('promise3');
//     resolve();
// }).then(function () {
//     console.log('promise4');
// });

// console.log('script end');

// script start
// async1 start
// promise1
// promise3
// script end
// promise2
// async1 end ---
// promise4   +++
// 22 
// setTimeout


// [

//  1   'then(() => {
//         console.log('promise1')
//     })'

//  2  then(()=>{console.log('a2then')})

//  3  console.log('a1 end')

// ]


//  


async function a1() {
    console.log('a1 start')
    await a2()
    // console.log('a1 end')

}
async function a2() {
    console.log('a2')
}

console.log('script start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)



b1().then(() => {
    console.log('promise1')
})

a1().then(() => {
    console.log('a1 end')

})

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})

promise2.then((res) => {
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
console.log('script end')


const tasks = [
    'promise1',
    'promise2',
    'setTimeout1'
]

function content() {
    // promise1

    /// setTimeout1

    // ...

    // promise1
    // {

    // promise2

    // }
}


function testFinally() {
    try {
        return "出去玩";
    } catch (error) {
        return "看电视";
    } finally {
        return "做作业";
    }
    return "睡觉";
}

const [name,setName] = useState()

function useState(initState){
    this.state = initState


    function setName(state){
        this.state = state
    }

    return [this.state, setName]
}