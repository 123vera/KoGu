import React, { useState } from 'react';

// ES11 新语法
function ES() {
  const [number, setNumber] = useState(1)

  const changeNumber = function* () {
    if (number > 40) return
    console.log('number', number)
    const a = setNumber(20 + number)
    yield a
    setTimeout(() => {
      console.log('a', a)
      // return a
    }, 2000)
    // const b =  yield setNumber2(60 + number2)
    //    var x = 1;
    //  var y = yield(x+1);
    //  var z = yield(x+y);
    //  return z;
  }

  console.log('changeNumber', changeNumber().next())




  //   // OptionalChaining
  //   const flower = {  colors: {
  //     red: true
  // }}
  //   console.log(flower.species?.lily) // 'red'
  return (
    <p>{ '-' }</p>
    // <p>{flower.color ?? '-'}</p>
  )




}



// console.log(flower.colors.red) // 正常运行
// console.log(flower.species?.lily) // 输出 undefined

export default ES
// export default ES
// export  OptionalChaining 