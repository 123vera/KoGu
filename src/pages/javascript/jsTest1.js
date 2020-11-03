import React from 'react'
import './jsTest1.scss'

function  Index() {

  // 计算阶乘 —— while
  const factorial1 = (number) => { 
    let pr = 1
    while(number > 1){
      pr *= number
      number--
    }
    return pr
  }

  // 计算阶乘 —— for(){}
  const factorial2 = (number) => { 
    try{
      let pr = 1
      for(let i= 1; i<= number; i++){
       pr *= i
      }
      return pr
    }
    catch(err){
      console.err(err)
    }
    finally{
     console.log('323')
    }
  }


return (
  <div className="js-test">
    <h2>js练习</h2>
    <ul>
      <li>
      阶乘的2种方法： {factorial1(4)}  ||  {factorial2(4)}
      </li>

      <li>
        
      </li>
      </ul>
    
  </div>
)
}
export default Index