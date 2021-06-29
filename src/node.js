const http = require('http')
const hostname = '127.0.0.1'
const minimist = require('minimist')
const express = require('express')
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
console.count(
    'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
    'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.log('我的%s已经%d岁', '猫', 2)
console.log('%o', Number)
// console.log(process.env, process.env.NODE_ENV)
// console.log(process.argv.slice(2)) // 'node src/node.js  wang'  => 'wang'
// console.log(minimist(process.argv.slice(2))) // 'node src/node.js  --name=wang'  => { _: [], name: 'wang' }
process.exit()
