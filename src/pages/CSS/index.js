import React, { Component } from 'react'
import './index.scss'

// clamp(minimum, preferred, maximum);

class Index extends Component {
    render() {
        return (
            <div id="clampCss">
                <figure>
                    <img alt="img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51c0b5e302114b2988657b89f41148e1~tplv-k3u1fbpfcp-zoom-1.image" />
                    <figcaption>
                        打造自适应网站只用一个CSS属性就够了.用一个CSS属性创建一个响应式网站，让我们来看看它是如何做到的。<span role="img" aria-label="emjio">🤔</span>
                        以这个模板为例，没有应用css属性。🖥使用 clamp() CSS函数，我们可以创建仅具有一个属性的响应式网站。
                        现在添加魔术CSS.
                        <p>
                            说明： clamp() 的工作原理是“夹紧”或限制一个灵活的值，使其处于最小和最大范围之间。
                        </p>
                        <p>
                            使用方法如下：

                            minimum 最小值：例如 16px
                            flexible 弹性值：例如 5vw
                            maximum 最大值：例如 34px
                        </p>
                        <code>
                            h1{ 'font-size: clamp(16px, 5vw, 34px)' }
                        </code>
                        <p>
                            clamp() 函数接收三个用逗号分隔的表达式作为参数，按最小值、首选值、最大值的顺序排列。

                        </p>
                        <ul>
                            <li>
                                当首选值比最小值要小时，则使用最小值。

                            </li>
                            <li>
                                当首选值介于最小值和最大值之间时，用首选值。
                            </li>

                            <li>
                                当首选值比最大值要大时，则使用最大值。
                            </li>
                        </ul>
                        <p>
                            在此示例中，仅当该值大于 16px 且小于 34px 时,h1 字体大小值将为视口宽度的 5％。
                            例如，如果你的视口宽度是 300px，你的 5vw 值将等于 15px，但是，你将该字体大小值限制为最小 16px，因此这就是将要发生的情况。
                            另一方面，如果你的视口宽度为 1400px，则 5vw 将高达 70px！但幸运的是，你将该最大值限制为 34px，因此它不会超过该值。
                        </p>
                        <p>
                            在线Demo：https://dip15739.github.io/ResponsiveWebsite-CSSproperty/
                        </p>
                        <p>
                            h1 元素的 font-size 设置为 clamp(1.8rem, 2.5vw, 2.8rem).。其含义是 font-size 为 1.8rem，当计算出 2.5vw 比 1.8rem  大时，font-size 为 2.5vw，同时，当 2.5vw 计算出来的值比 2.8rem 大时，font-size 为 2.8rem。clamp() 允许你设置一个上限值和下限值。
                            <br />
                            body 元素的 width 设置为 min(1000px, calc(70% + 100px))。其含义是宽度设置为  1000px，当 calc(70% + 100px) 比  1000px 小时，宽度为 calc(70% + 100px) 。 min() 允许你设置一个上限值。
                            <br />
                            p元素的 font-size 设置为 max(1.2rem, 1.2vw)。其含义是 font-size 是 1.2rem，当计算出 1.2vw 比 1.2rem 大时，则 font-size 为  1.2vw 。 max() 允许你设置一个下限值。
                        </p>

                        <h1>Simple responsive test</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci, eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula. Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis, libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit. Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum. Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.</p>

                        <p>Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem. </p>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default Index