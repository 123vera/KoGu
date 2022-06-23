const { resolve } = require("dns")

/**
 * 实现一个promise
 * resolve(), reject()  
 * 1、创建基本构造函数
 * 2、初始化当前状态（pending、reject、resolve其中一个）、返回结果（promiseResult）、2个执行回调（resolve、reject）
 * 3、then(onfulfilled(), onReject())
 * 
*/
const MyPromise = function (executor) {
    let self = this
    self.promiseState = 'pending'  // 状态值
    self.promiseResult = null   // 执行结果

    self.promiseResolveQuene = [] // resolve 队列
    self.promiseRejectQuene = [] // reject 队列


    function resolve(result) {
        if (self.promiseState === 'pending') {
            self.promiseState = 'resolve'
            self.promiseResult = result
            self.promiseResolveQuene.forEach(element => {
                element(self.promiseResult)
            });
        }
    }

    function reject(reason) {
        if (self.promiseState === 'pending') {
            self.promiseState = 'reject'
            self.promiseResult = reason
            self.promiseRejectQuene.forEach(element => {
                element(self.promiseResult)
            });
        }
    }

    try {
        executor(resolve, reject)
    } catch {
        reject('some error')
    }
}


// then()  作为promise的实例方法，同实例方法还有Promise.prototype.catch、Promise.prototype.finally
MyPromise.prototype.then = function (onfulfilled, onReject) {
    var _this = this;

    if (_this.promiseState === 'resolve') {
        return new MyPromise((resolve, reject) => {
            try {
                let res = onfulfilled(_this.promiseResult)
                res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
            } catch (err) {
                reject(err)
            }
        })
    }

    if (_this.promiseState === 'reject') {
        return new MyPromise((resolve, reject) => {
            try {
                // 链式调用 res.then(resolve, reject)
                let res = onReject(_this.promiseResult)
                res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
            } catch (err) {
                reject(err)
            }
        })
    }

    // 等待状态时把回调存起来，状态改变再触发 (实现异步)
    if (_this.promiseState === 'pending') {
        return new MyPromise((resolve, reject) => {

            _this.promiseResolveQuene.push(function () {
                let fn = onfulfilled(_this.promiseResult) // 实现链式回调1
                fn instanceof MyPromise ? fn.then(resolve, reject) : resolve(fn) // 实现链式回调2
            })

            _this.promiseRejectQuene.push(function () {
                let fn = onReject(_this.promiseResult) // 实现链式回调1
                fn instanceof MyPromise ? fn.then(resolve, reject) : resolve(fn) // 实现链式回调2
            })
        })
    }
}


// all()  作为promise规范的静态方法（allSettled、race、any、reject、resolve等 ）
MyPromise.all = function (promises) {
    let resultReturn = []
    let count = 0

    // 单纯实现 promise.all 方法 则假定Promise方法可用
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promises)) return reject('传入参数有误')
        if (promises.length === 0) return resolve(promises);

        promises.forEach(function (promise, index) {
            Promise.resolve(promise).then(val => {
                resultReturn[index] = val
                count += 1

                if (count === promises.length) { resolve(resultReturn) }
            }, err => {
                reject(err)
            })
        })
    })
}

Promise.MyAll = function (promises) {
    let arr = [],
        count = 0 // 

    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {


            Promise.resolve(item).then(res => {
                // 只有resolve的值 才加进resultReturn
                count += 1
                arr[i] = res
                if (count === promises.length) resolve(arr)
            }).catch(reject)
        })
    })
}


Promise.MyAll = function (promises) {
    let arr = []

    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {


            Promise.resolve(item).then(res => {
                // 只有resolve的值 才加进resultReturn

                arr[i] = res
                if (arr.length === promises.length) resolve(arr)
            }).catch(reject)
        })
    })
}

// count = 3
[then1, then2, then3]
[then1res]






/**
 * promise 同步执行函数
*/
let result = new MyPromise((resolve, reject) => {
    // reject('11some error')

    // 模拟异步调用
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

/**
 * then方法 一次回调
*/
// result.then(data => { console.log('data', data) }, error => { console.log(error) })



/**
 * then 方法多次调用
*/
// result.then(data => {
//     console.log(1);
//     console.log('data', data)
// })
// result.then(res => {
//     console.log(2);
//     console.log('res', res)
// })



/**
 *  then 方法链式回调
*/
// result.then(data => {
//     console.log(1);
//     console.log('data', data)
//     return 999
// }).then(res => {
//     console.log(2);
//     console.log('res', res)
// })



/**
 * promise.all ,属于promise规范里的6个静态方法其一，所以使用static
*/
const p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 延时一秒')
    }, 1000)
})
const p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 延时两秒')
    }, 2000)
})

const p4 = Promise.reject('p4 rejected')

const p5 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('p5 rejected 延时1.5秒')
    }, 1500)
})
const p1 = new Promise((resolve) => {
    setTimeout(() => resolve('p1'), 2000)
})
const p6 = Promise.resolve('p6')
const p7 = Promise.resolve('p7')

Promise.MyAll([p1, p2, p5]).then((values) => {
    console.log('*****values==', values);
}).catch(err => console.log(err));

console.log('-------------')

const MyPromise1 = function (executor) {
    let _this = this
    _this.promiseState = 'pending'
    _this.promiseResult = null

    _this.promiseResolveQuene = []
    _this.promiseRejectQuene = []


    function resolve(value) {
        if (_this.promiseState === 'pending') {
            _this.promiseState = 'resolve'
            _this.promiseResult = value
            _this.promiseResolveQuene.forEach((element) => {
                element(value)
            })
        }
    }

    function reject(error) {
        if (_this.promiseState === 'pending') {
            _this.promiseState = 'reject'
            _this.promiseResult = error
            _this.promiseRejectQuene.forEach((i) => {
                i(error)
            })
        }
    }

    try {
        executor(resolve, reject)
    } catch {
        reject('some error')
    }
}



MyPromise1.prototype.then = function (onFulfilled, onReject) {
    let _this = this

    if (_this.promiseState === 'pending') {
        return new MyPromise1((resolve, reject) => {
            _this.promiseResolveQuene.push(function () {
                let fn = onFulfilled(_this.promiseResult)
                fn instanceof MyPromise1 ? fn.then(resolve, reject) : resolve(fn)
            })
            _this.promiseRejectQuene.push(function () {
                let fn = onReject(_this.promiseResult)
                fn instanceof MyPromise1 ? fn.then(resolve, reject) : resolve(fn)
            })
        })
    }

    if (_this.promiseState === 'resolve') {
        return new MyPromise1((resolve, reject) => {
            let res = onFulfilled(_this.promiseResult)
            res instanceof MyPromise1 ? res.then(resolve, reject) : resolve(res)
        })
    }

    if (_this.promiseState === 'reject') {
        return new MyPromise1((resolve, reject) => {
            let res = onReject(_this.promiseResult)
            res instanceof MyPromise1 ? res.then(resolve, reject) : resolve(res)
        })
    }
}

MyPromise1.all = function (promises) {
    let result = []
    let count = 0

    return new Promise((resolve, reject) => {
        promises.forEach((promise, key) => {
            count += 1

            Promise.resolve(promise).then(val => {
                result[key] = val
                if (count === promises.length) return resolve(result)
            }, err => {
                reject(err)
            })
        })
    })
}

let promise1 = new MyPromise1((resolve, reject) => {
    setTimeout(() => {
        // reject(2)
        resolve(2)
    }, 100)
})
// promise1.then(data => {
//     console.log('data1', data)
//     return 999
// }).then(res2 => {
//     console.log('res2', res2)
// })

MyPromise1.all([p1, p6, p7]).then((values) => {
    console.log('values1==', values);
}).catch(err => console.log(err));


Promise.all([p1, p6, p7]).then((values) => {
    console.log('values==', values);
}).catch(err => console.log(err));


// promise1.then(res => {
//     console.log('res1', res)
// }, error => {
//     console.log('error', error)
// })


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject(2)
        resolve(2)
    }, 100)
})
// promise2.then(data => {
//     console.log('data', data)
//     return 999
// }).then(ress => {
//     console.log('ress', ress)
// })

// promise2.then(res => {
//     console.log('res', res)
// }, error => {
//     console.log('error', error)
// });

// console.log('promise1::', promise1, ',promise2::', promise2)


function delay(val, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(val)
            // resolve(val)
            console.log('resolve', resolve(val)) // 3、2、1 出餐顺序
        }, time, val)
    })
}

Promise.all([delay(1, 300), delay(2, 200), delay(3, 100)]).then(values => {
    console.log('values', values) // 1，2，3 入参顺序
})