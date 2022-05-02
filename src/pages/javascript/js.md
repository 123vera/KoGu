- 手写一个单例

```
  1、es5 -指定一个实列变量

   let instance = null;

    let List = function (name) {
      this.name = name;
    };

    List.getInstance = function (name) {
      if (!instance) {
        instance = new List(name);
      }
      return instance;
    };

```

```
  2、es5 -使用构造函数的静态变量

   let List = function (name) {
      this.name = name;
    };

    List.getInstance = function (name) {
      if (!this.instance) {
        //等价于List.instance
        this.instance = new List(name); //此时this指向List本身
      }
      return this.instance;
    };

```

```
  3、es6

   class List {
      constructor(name) {
        if (!List.instance) {
          List.instance = this; //this就是第一次创建的实列
        }
        return List.instance;
      }
    }


```

```
  4、es6

  class List {
    constructor(name) {
      this.name = name;
    }
    static getInstance(name) {
      if (!List.instance) {
        List.instance = new List(name);
      }
      return List.instance;
    }
}


```

---

- 实现一个订阅者模式

```
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
}
```

- 实现一个继承

```
//父类
function Father(name){
    this.name = name;
}

function Son (name,color){
    Father.call(this,name)//相当于super,实现属性继承
    this.color = color;
}

function inheritPrototype(Son, Father){
    let myPrototype = Object.create(Father.prototype);//获取属性和继承
    Son.prototype = myPrototype;
    Son.prototype.constructor = Son;
    console.log(Son)
}
inheritPrototype(Son, Father)
```

- 实现一个类组件 setState 的回调

```
function useStateHook(obj){
    const [state,setState] = useState();
    const ref = useRef();
    const fn = useCallback(
        (state,cb) => {
            setState(state);
            ref.current = cb;
        },
        [])

    useEffect(()=>{
        ref.current();
    },[state])
    return [state,fn]

}

const [a,setA] = useState();

const [b,setB] = useStateHook();


setA(a);

setB(2,(v)=>{
    console.log(v)
})
```

- 说一下用 hooks 实现一个小型 react-redux 思路

```
<Provider value={store}></Provider>
connect(mapStatetoProps,mapDispatchToProps)()
useReucer()

1.useContext()  context =React.createContext()
2. context.Provider value={store,dispatch}

3. const [storem, dispatch] = useReducer(reducer)
4.[dispatch] useContext(context)
```

- 找某个字符串中出现最多的字符和它一共出现多少次
  // 输入"vbbbbhybbfhbbgbbb";
  //输出"b";
  //要求使用正则表达式

  /(\w)\1+/g

- 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

  //输入: "aba"
  //输出: True

  //输入: "abca"
  //输出: True

  //输入: "abcaf"
  //输出: false

---

### 以上笔试
