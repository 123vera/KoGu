const http = require('http')
const express = require('express')
const hostname = '127.0.0.1'
const minimist = require('minimist')
const app = express()

app.get('/', (req, res) => {
    res.send('212')
})

const server = app.listen(3000, () => { console.log('服务器准备就绪') })
const x = 1
const y = 2
const z = 3
console.count(
    'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count('x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
    'x 的值为 ' + x + ' 且已经检查了几次？'
)



const fn = () => { console.log('do something') }
const testFn = () => {
    console.time()
    fn()
    console.timeEnd()
}

testFn()

const ProgressBar = require('progress')
const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
    bar.tick({
        'token1': "Hello",
        'token2': "World!\n"
    })
    console.log(bar.complete)
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100);


// console.log('我的%s已经%d岁', '猫', 4)
// console.log('%o', Number)
// console.log(process.argv.slice(2)) // 'node src/node.js  wang'  => 'wang'
// console.log(minimist(process.argv.slice(2))) // 'node src/node.js  --name=wang'  => { _: [], name: 'wang' }

app.set('port', process.env.PORT || 3000)

// app.get('/', (request, response) => {
//     response.send('Home page')
// })

app.get('/about', (request, response) => {
    response.send('About page')
})

app.use((request, response) => {
    console.log('response', response)
    response.type('text/plain')
    response.status(505)
    response.send('Error page')
});

app.listen(3000, () => {
    console.log('Express server started 3000')
})

process.exit()
