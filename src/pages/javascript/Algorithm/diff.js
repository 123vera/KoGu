let arr = [1, 2, 3, 4, 5]

function render(data) {
    return (
        <div>
            { data.map((i, key) => (
                <p key={ key }>{ i }</p>
            )) }
        </div>
    )
}

// key i
// 0   1
// 1   2
// 2   3
// 3   4
// 4   5

arr.splice(1, 1) // 输出内容
// key i
// 0   1
// 1   3
// 2   4
// 3   5

render(arr)

