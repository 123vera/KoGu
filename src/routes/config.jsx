
const routes = [
    { key: '/', title: 'home', component: require('@pages/catalogue/').default },

    // react
    { key: '/rc/hook', title: 'hook应用', component: require('@pages/javascript/reactHook/').default },
    { key: '/rc/react-ref', title: 'react-ref', component: require('@pages/javascript/reactJs/senior/ref/').default },
    { key: '/rc/react-context', title: 'react-context', component: require('@pages/javascript/reactJs/senior/context/').default },
    { key: '/rc/react-source', title: 'React源码', component: require('@pages/javascript/reactJs/reactSource/').default },
    { key: '/rc/react-senior', title: 'React高级', component: require('@pages/javascript/reactJs/reactSenior/').default },


    // threejs
    { key: '/threejs/line', title: 'threejs - 模拟线', component: require('@pages/threejs/line/').default },
    { key: '/threejs/curve', title: 'threejs 一些尝试', component: require('@pages/threejs/curve/').default },
    { key: '/threejs/interLine', title: 'threejs - demo', component: require('@pages/threejs/interLine/').default },
    { key: '/threejs/wormHoles', title: 'threejs - 虫洞', component: require('@pages/threejs/wormHoles/').default },

    // javascript
    { key: '/js/inter', title: '算法题', component: require('@components/hook/Interview/').default },
    { key: '/js/js', title: 'javascript练习', component: require('@pages/javascript/Algorithm/jsTest1/').default },
    { key: '/js/scrollreveal', title: '双向滚动页面', component: require('@pages/html/scrollreveal/').default },
    { key: '/js/worldArea', title: '世界国家城市联动', component: require('@pages/html/worldArea/').default },
    { key: '/js/cloneDeep', title: ' 深拷贝和浅拷贝', component: require('@pages/javascript/cloneDeep/').default },
    { key: '/js/home', title: ' 最佳实践', component: require('@pages/javascript/home/').default },
    { key: '/js/es11', title: 'ES11', component: require('@components/common/Es/').default },

    // css & html
    { key: '/html/css', title: '不常用的CSS属性1', component: require('@pages/css/index/').default },
    { key: '/html/testcss', title: '不常用的CSS属性2', component: require('@pages/css/test/').default },
    { key: '/html/htmlTag', title: '不常用的html标签', component: require('@components/common/HtmlTag/').default },
    { key: '/html/inputItem', title: '不常用的表单元素', component: require('@components/common/InputItem/').default },

    // network
    { key: '/network', title: '浏览器', component: require('@pages/network/index/').default },

]

export default routes