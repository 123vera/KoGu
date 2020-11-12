import React, { useEffect } from 'react'
import Scrollreveal from 'scrollreveal'
import './scrollreveal.scss'

let sr = Scrollreveal({ reset: true })

function Index() {
    useEffect(() => {
        const titleFromTopConfig = {
            origin: 'top',
            distance: '30px',
            duration: 600,
            easing: 'ease',
            delay: 200
        }

        const titleFromBottomConfig = {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            easing: 'ease',
            delay: 300
        }

        const subtitleFromBottomContentConfig = {
            origin: 'bottom',
            distance: '30px',
            duration: 700,
            easing: 'ease',
            delay: 400
        }

        const btnLeftConfig = {
            origin: 'bottom',
            distance: '50px',
            duration: 400,
            delay: 600,
        }

        const btnRightConfig = {
            origin: 'bottom',
            distance: '50px',
            duration: 400,
            delay: 750
        }

        sr.reveal('h3', titleFromTopConfig)

        sr.reveal('h4', titleFromBottomConfig)
        sr.reveal('p', subtitleFromBottomContentConfig)

        sr.reveal('.btn-left', btnLeftConfig)
        sr.reveal('.btn-right', btnRightConfig)
        // sr.reveal('.span', btnSpanConfig)

        Scrollreveal().reveal('.spans', {
            interval: 16,
            reset: true,
            duration: 1000,
            opacity: 0,
            rotate: { x: -180, y: 0, z: 0 },
        })

    }, [])
    return (
        <div id="scrollreveal">
            <section>
                <h3>标题1标题1</h3>
                <p >内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
                <div className="btn-group">
                    <a className="btn btn-left" href="#">
                        <div className="spans">brn1 brn1rrr</div>
                    </a>
                    <button className="btn btn-right">
                        <span className="spans">brn2 brn2yyy</span>
                    </button>
                </div>
                <main>
                    背景图
                </main>

            </section>

            <section>
                <h4>标题2标题2</h4>
                <br />
                <p>内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
            </section>

            <section>
                <h4>标题2标题2</h4>
                <br />
                <p>内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
            </section>
            <section>
                <h4>标题2标题2</h4>
                <br />
                <p>内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
            </section>

            <section>
                <h4>标题2标题2</h4>
                <br />
                <p>内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
            </section>
            <section>
                <h4>标题2标题2</h4>
                <br />
                <p>内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
                <main>
                    背景图
                </main>
                <div className="btn-group">
                    <button>brn1</button>
                    <button>brn2</button>
                </div>
            </section>
            <section>
                <h4>标题2标题2</h4>
                <p>内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容2内容2内容2内容2内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</p>
                <div className="btn-group">
                    <button>brn1</button>
                    <button>brn2</button>
                </div>
                <main>
                    背景图
                </main>
            </section>
        </div>
    )
}

export default Index