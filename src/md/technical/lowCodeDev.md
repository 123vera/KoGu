## 低代码（Low-Code Development，LCD）平台

> ### 解决问题

- 减少约束。图形化的拖拽实现配置界面，并兼容了自定义的组件、代码拓展，不限于编程人员产出
- 提升效率。在 c 端落地、营销、广告等界面，B 端后台管理类型网站建设中很大程度提升效率

> ### 实践

- 核心逻辑：通过组件元数据拼装成一个页面的描述信息，然后通过渲染器组件将描述信息转化页面 dom 元素。

- 核心问题一：组件复用。通过一个 json 数据来描述功能区块，解决复用的问题

  ```
  以下描述了一个TableList的 搜索表头  的json信息
  {
      code: 'SearchTable',
      name:'搜索表头',
      props: {
          columns:[
              {
                  name:'name',
                  desc:'姓名',
                  formType: 'input',
                  isSearch: true
              },{
                  name:'age',
                  desc:'年龄',
                  formType: 'numberInput',
              },
          ],
          buttons:[
              {
                  name: 'add',
                  desc: '新增'
              }
          ]
      }
  }
  ```

- 核心问题二：拖动。顺序排列布局的拖动 和自由布局的拖动

  ```
  —— 拖动插件 ——
    VUE：vuedraggable
    REACT： react-draggable
  ```
