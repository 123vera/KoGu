// *** 实现一个单例(_一个类只能有以一个实例)
// 定义： 确保一个类仅有一个实例，并提供一个访问其唯一对象的方式。
// 单例使用场景： 比如线程池、全局缓存等。浏览器的window对象就是一个单例。在JavaScript开发中，对于这种只需要一个的对象，我们的实现往往使用单例。
// 参考文章： https://segmentfault.com/a/1190000012842251


// 定义一个类
function Singleton(name) {
    this.name = name
    this.instance = null // 创建一个变量来标志当前的类已经创建过对象
}

// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function () {
    console.log(this.name)
}

// 获取类的实例
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}
// 获取对象1
let a = Singleton.getInstance('aa')  // Singleton { name: 'aa', instance: null }

// 获取对象2
let b = Singleton.getInstance('bb')  // Singleton { name: 'aa', instance: null }

// console.log(a === b);  // true 





// ------------------------------------分割线--------------------------------------------------------------




// *** 实现观察者模式
// 定义： 观察者模式即一群观察者（Observers）观察监听某个被观察对象（Subject），当有关状态发生变化时，Subject会通知这一系列Observers触发更新。
// 关键字： 一对多（一个Subject 可以对应多个Observes）
// 参考文章：https://segmentfault.com/a/1190000023825602


// 被观察者
function Subject() {
    this.observers = []
}

Subject.prototype = {
    // 添加观察者
    add(observer) {
        this.observers.push(observer)
    },

    // 移除观察者
    remove(observer) {
        let observers = this.observers
        let deleteIndex = observers.findIndex(i => i === observer)
        observers.splice(deleteIndex, 1)  // 原数组改变

        // observers.map((o, key) => {
        //     if (o === observer) {
        //         observers.splice(key, 1) // observers = [1,2]  原数组改变
        //         // delete observers[key] // observers = [1,2, empty]  原数组长度不变
        //     }
        // })
    },


    // 通知观察者
    notify() {
        let observers = this.observers

        observers.map((o, key) => {
            observers[key].update()
        })
    }
}

//观察者
function Observer(name) {
    this.name = name
}

Observer.prototype = {
    update: function () {
        console.log('被通知了---我是观察者：', this.name);
    }
}


let subject = new Subject()
let john = new Observer('john')
let ana = new Observer('ana')

subject.add(john) // 添加john的观察者
subject.add(ana)  // 添加ana的观察者
subject.remove(ana) // 移除ana的观察者

// subject.notify()



// ------------------------------------分割线--------------------------------------------------------------



// *** 实现订阅者模式
// 发布订阅模式：一群订阅者（Subscriber）通过消息调度中心来实现基于某个主题去订阅发布者（Publisher）,当有关状态发生变化时，Publisher会基于某个主题去通知该主题下对应的订阅者（Subscriber）触发更新。
// 参考文章： https://segmentfault.com/a/1190000023825602
// 可以理解为：一个班里的学生都在听老师讲课，但是老师不止一种，可能有数学老师、语文老师、历史老师等。各门课的老师在布置任务时，学生们的作业也不同。

// 创建以一个发布订阅中心(调度中心)
function PubSub() {
    this.eventList = {} // 主题列表 

    // {
    //     'sing': [fn1, fn2] （sing指代事件主题[科目]， fn指代订阅的事件[作业]， 不同主题[科目]下均可有多个事件[作业]）
    //     'dance': [fn1, fn2, fn3] 
    // }
}

PubSub.prototype = {
    // 订阅事件
    subscribe: function (type, fn) {
        if (!this.eventList.hasOwnProperty(type)) {
            this.eventList[type] = []
        }
        this.eventList[type].push(fn)
    },

    // 取消订阅事件
    unSubscribe: function (type) {
        delete this.eventList[type]
    },

    // 发布事件
    publish: function (type, param) {
        let list = this.eventList[type]

        if (!list) {
            console.log(`没有${type}该主题`)
            return
        }

        for (let i = 0; i < list.length; i++) {
            list[i](param)
        }
    }
}

let Pub = new PubSub()

// 为不同主题（如主题sing或者dance）添加订阅者
Pub.subscribe('sing', function (name) {
    console.log('sing 订阅者01 歌名为 ', name)
})
Pub.subscribe('dance', function (name) {
    console.log('dance 订阅者 歌名为 ', name)
})
Pub.unSubscribe('dance')

// 根据不同主题（如主题sing或dance），发布不同消息
Pub.publish('sing', 'Heal the word');
Pub.publish('dance', '华尔兹舞');




// ------------------------------------分割线--------------------------------------------------------------


// *** 实现继承
function Father(name) {
    this.name = name
}

function Son(name, color) {
    Father.call(this, name)
    this.color = color
}

function inheritPrototy(Son, Father) {
    let myProto = Object.create(Father.prototype)
    Son.prototype = myProto
    Son.prototype.constructor = Son
    console.log(Son)
}

// inheritPrototype(Son, Father)





let m = 2
let dp = [];

for (let j = 1; j < m; j++) {
    let sum = [];
    for (let i = 1; i < j; i++) {
        // sum.push(i * (j - i))
        for (let k = 0; k < dp[j - i].length; k++) {
            sum.push(i * dp[j - i][k])
        }
    }
    dp[j] = sum;

}

// console.log(dp)




function xh(num) {
    let a = 1
    let arr = []

    for (let i = 1; i < num; i++) {
        // a = (num - i) + 'x' + i
        // let splArr = a.split('x')
        a = (num - i) * i
        // let splArr = [num - i, i]
        let array = []

        // console.log(a, splArr[splArr.length - 1] > 1)
        if (i > 4) {
            array = (num - i) * xh(i)
            // array = splArr[0] + 'x' + xh(splArr[splArr.length - 1])
            // console.log('array', a, a.split('x')[0], array)
            arr.push(array)
        }

        arr.push(a)
    }


    console.log(arr, Math.max(...arr))
    // return a
    return Math.max(...arr)
}



xh(7)


function integerBreak1(n) {
    if (n <= 4) return n
    return 3 * integerBreak1(n - 3)
}

function integerBreak(n) {
    if (n === 3) {
        return 2
    }
    if (n === 2) {
        return 1
    }

    return integerBreak1(n)
}

// console.log('integerBreak: ', integerBreak(8))
