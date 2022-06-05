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
        count = 0
        
    return new Promise((resolve, reject) => {
        promises.forEach((item, i) => {
            Promise.resolve(item).then(res => {
                arr[i] = res
                count += 1
                if (count === promises.length) resolve(arr)
            }).catch(reject)
        })
    })
}




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
const p1 = Promise.resolve('p1')
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


MyPromise.all([p1, p2, p5]).then((values) => {
    console.log('values==', values);
}).catch(err => console.log(err));
