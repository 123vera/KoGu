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
      —— 类型转换 ——
      <br/>
        <p>
          1.转换成 string 时，使用 + ''。<br/>
          <code>
                // good<br/>
                num + '';<br/>

                // bad<br/>
                new String(num);<br />
                num.toString();<br />
                String(num);
          </code>
        </p>
        <p>
          2.转换成 number 时，使用 +。<br />
          <code>
            // good<br />
            +str;<br />

            // bad<br />
            Number(str);
          </code>
        </p>
        <p>
          3.string 转换成 number，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt。<br />
          <code>
          var width = '200px';<br />
          parseInt(width, 10);
          </code>
        </p>
        <p>
          4. 使用 parseInt 时，必须指定进制。<br />
          <code>
               // good<br />
              parseInt(str, 10);<br />

              // bad<br />
              parseInt(str);
          </code>
        </p>
        <p>
          5.转换成 boolean 时，使用 !!。<br />
          <code>
          var num = 3.14;<br />
!!num;
          </code>
        </p>
        <p>
          6.number 去除小数点，使用 Math.floor / Math.round / Math.ceil，不使用 parseInt。<br />
          <code>
          // good<br />
var num = 3.14;<br />
Math.ceil(num);<br />

// bad<br />
var num = 3.14;<br />
parseInt(num, 10);
          </code>
        </p>
        <p>
          7.for in 遍历对象时, 使用 hasOwnProperty 过滤掉原型中的属性。<br />
          <code>
            {() => {
              var newInfo = {};
              const info = {'33':'3333', '44':'4444'}
              for (var key in info) {
                  if (info.hasOwnProperty(key)) {
                      newInfo[key] = info[key];
                  }
              }
            }}
          </code>
        </p>
        <p>8.清空数组使用 .length = 0。</p>
        <p>9.在 Javascript 中设置和获取自定义属性
          <code >
            const element = document.querySelector('.someElement');
            <br />
            // 获得元素的自定义属性<br />
              element.style.getPropertyValue("--first-color");<br />
            // 设置元素的自定义属性<br />
            element.style.setProperty("--my-color", "#ccc");
          </code> 
        </p>
      </li>
      </ul>
    
  </div>
)
}
export default Index