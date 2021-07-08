import React from 'react'
import './jsTest1.scss'

// 实现一个继承
// 父类 
function Father(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
// 方法定义在原型对象上（共享） 
Father.prototype.sayName = function () {
  alert(this.name);
};

function Son(name, age) {
  Father.call(this, name); // 核心 
  this.age = age;
}
Son.prototype = Object.create(Father.prototype); // 核心: 
Son.prototype.constructor = Son; // 修复子类的 constructor 的指向


function Index() {

  // 计算阶乘 —— while
  const factorial1 = (number) => {
    let pr = 1
    while (number > 1) {
      pr *= number
      number--
    }
    return pr
  }

  // 计算阶乘 —— for(){}
  const factorial2 = (number) => {
    try {
      let pr = 1
      for (let i = 1; i <= number; i++) {
        pr *= i
      }
      return pr
    }
    catch (err) {
      console.err(err)
    }
    finally {
      console.log('323')
    }
  }


  return (
    <div className="js-test">
      <h2>js练习</h2>
      <ul>
        <li>
          阶乘的2种方法： { factorial1(4) }  ||  { factorial2(4) }
        </li>

        <li>
          —— 类型转换 ——
          <br />
          <p>
            1.转换成 string 时，使用 + ''。<br />
            <code>
              // good<br />
              num + '';<br />

                // bad<br />
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
            5.转换成 boolean 时，使用 !!<br />
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
              { () => {
                var newInfo = {};
                const info = { '33': '3333', '44': '4444' }
                for (var key in info) {
                  if (info.hasOwnProperty(key)) {
                    newInfo[key] = info[key];
                  }
                }
              } }
            </code>
          </p>
          <p>8.清空数组使用 .length = 0。</p>
          <p>9.在 Javascript 中设置和获取自定义属性
            <code>
              const element = document.querySelector('.someElement');
              <br />
            // 获得元素的自定义属性<br />
              element.style.getPropertyValue("--first-color");<br />
            // 设置元素的自定义属性<br />
              element.style.setProperty("--my-color", "#ccc");
            </code>
          </p>
        </li>

        <li>
          js之  两个变量值的交换
          一般两个变量值交换，大家首先想到的可能是通过一个中间变量进行转换，但是其实还有更快的写法，代码如下：
          <code>
            var a=1, b=2 <br />
            a=[b, b=a][0]</code>
        </li>

        <li>
          实现一个单例
          <code>

          </code>
        </li>
        <li>
          实现一个订阅者模式
          <code>
            { `
              class EventEmit{
                constructor(){
                    this.event = {}
                }
                on(eventName, callback){
                    if(this.event[eventName]){
                        this.event[eventName].push(callback)
                    }else{
                        this.event[eventName] = [callback]
                    }
                }
                emit(eventName, ...args){
                    if(this.event[eventName]){
                        this.event[eventName].forEach(fn=>fn.apply(this, args))
                    }
                }
                remove(eventName, callback){
                    this.event[eventName] = this.event[eventName].filter(fn=>fn!callback)
                }
              }`}
          </code>
        </li>

        <li>
          实现一个继承
          <code>
            { `
            function Son (name,color){
              Father.call(this,name)//相当于super,实现属性继承
              this.color = color;
            }
            function inheritPrototype(Son, Father){
              let myPrototype = Object.create(Father.prototype);//获取属性和继承
              Son.prototype = myPrototype;
              Son.prototype.constructor = Son;
            }
            inheritPrototype(Son, Father)`}
          </code>
        </li>

        <li>
          实现一个类组件setState的回调
          <code>
            function useStateCb(){

            }
          </code>
        </li>

        <li>
          说一下用hooks实现一个小型react-redux思路
          <code>
            { `<Provider value={ store }></Provider>` }
            connect(mapStatetoProps,mapDispatchToProps)()
            useReucer()

            1.useContext()  context =React.createContext()
            2. context.Provider value={ store, dispatch }

            3. const [storem, dispatch] = useReducer(reducer)
            4.[dispatch] useContext(context)
          </code>
        </li>

        <li>
          // 找某个字符串中出现最多的字符和它一共出现多少次
          // 输入"vbbbbhybbfhbbgbbb"; 
          //输出"b"; 
          //要求使用正则表达式
          <code>

          </code>
        </li>

        <li>
          //给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
          //输入: "aba"
          //输出: True

          //输入: "abca"
          //输出: True

          //输入: "abcaf"
          //输出: false
          <code>

          </code>
        </li>
      </ul>

    </div>
  )
}
export default Index