import React from 'react'
import test3 from '../../aseets/imgs/test3.jpg';
import './test.scss'

function Index() {
    return (
        <div className="testcss">
            <ul>
                <li>
                    will-change属性通过告诉浏览器什么属性、什么元素将会发生变化，可以对这些操作进行可能性的优化，由此提高CSS动画的执行效率。
                </li>

                <li>
                    文字模糊效果:只需要添加以下两行代码，即可达到将文字模糊处理的目的。如下效果：
                    <br />

                    <div className="textShadow">
                        文字模糊效果:只需要添加以下两行代码，即可达到将文字模糊处理的目的。
                        <code>
                            color: transparent;
                            text-shadow: #111 0 0 5px;
                        </code>
                    </div>

                </li>
                <li>
                    css 选择器   .light & { }, 亮色模式下 修改某一属性值的选择器，很好用！举例：.light是本项目下的亮色样式名，仅在亮色模式下更改text-shadow的属性值
                </li>
                <li>
                    css之 毛玻璃效果
                    <img className="blur" src={ test3 } />
                </li>
                <li>
                    css之 多重边框
                    <div className="boxShadow"></div>
                    <br />
                    <br />
                </li>
                <li>
                    css-mask
                    <img className="maskImage" src={ test3 } alt="mask" />
                </li>
            </ul>
        </div>

    )
}

export default Index