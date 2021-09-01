import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Calendar } from 'react-h5-calendar'

// import { ReactHashCalendar } from 'react-hash-calendar'


import './index.scss'


const markDate = [
    ' 2021/11/24', ' 2021/11/22',
    { color: 'red', type: 'dot', date: ['0', ' 2021/02/25', ' 2021/03/25', ' 2021/04/01', ' 2021/05/25', ' 2021/06/25', ' 2021/07/25', ' 2021/08/25', ' 2021/09/25', ' 2021/10/25', ' 2021/11/25', ' 2021/12/25'] },
    { color: 'blue', type: 'circle', date: [' 2021/01/20', ' 2021/02/20', ' 2021/03/20', ' 2021/04/20', ' 2021/05/20', ' 2021/06/20', ' 2021/07/20', ' 2021/08/20', ' 2021/09/20', ' 2021/10/20', ' 2021/11/20', ' 2021/12/20'] },
    { color: 'pink', date: [' 2021/01/12', ' 2021/02/12', ' 2021/03/12', ' 2021/04/12', ' 2021/05/12', ' 2021/06/12', ' 2021/07/12', ' 2021/08/12', ' 2021/09/12', ' 2021/10/12', ' 2021/11/12', ' 2021/12/12'] },
    { color: '#000000', date: [' 2021/01/29', ' 2021/02/29', ' 2021/03/29', ' 2021/04/29', ' 2021/05/29', ' 2021/06/29', ' 2021/07/29', ' 2021/08/29', ' 2021/09/29', ' 2021/10/29', ' 2021/11/29', ' 2021/12/29'] }
] // 对象数组形式的标记日期，可以自定义标记颜色


const CalendarMain = () => {
    const [currentDate, setCurrentDate] = useState(dayjs().format('YYYY-MM-DD'))

    console.log('maxData', dayjs().subtract(1, 'month').endOf('month').format('YYYY--MM-DD'))
    console.log('minData', dayjs().subtract(2, 'month').startOf('month').format('YYYY--MM-DD'))
    return (
        <div id="calendar">
            日历组件
            {/* <ReactHashCalendar
                markType="dot"
                currentDate={ currentDate }
                onTouchEnd={ (a, b) => console.log(a, b) }
                showType={ 'month' }
                markDates={ [
                    { markType: 'circle', date: '2021-8-12', },
                    { markType: 'dot', date: '2021-8-23' },
                    { markType: 'circle', date: '2021-8-22' },
                    { date: '2021-8-2' },
                ] }
                onDateClick={ date => setCurrentDate(date.format('YYYY-MM-DD')) }
            /> */}

            <div>
                <Calendar
                    maxDate={ dayjs().subtract(-1, 'month').endOf('month').format('YYYY-M-D') }
                    minDate={ dayjs().subtract(2, 'month').startOf('month').format('YYYY-M-D') }
                    onDateClick={ date => {
                        if (date.isAfter(dayjs())) return

                        setCurrentDate(date.format('YYYY-MM-DD'))
                    } }
                    showType={ 'month' }
                    markDates={ [
                        { color: '#01dcab', markType: 'circle', date: '2021-8-5', },
                        { color: '#ffa100', markType: 'circle', date: '2021-8-23' },
                        { color: '#ffa100', markType: 'circle', date: '2021-8-22' },
                        { color: '#ff0000', markType: 'circle', date: '2021-8-20' },
                        { date: ['2021-8-2', '2021-8-3', '2021-8-4'] },
                    ] }
                    markType="circle"
                    currentDate={ currentDate }
                    disableWeekView={ true }
                />

            </div>

            <ul className="legend flex_h justify_end">
                <li>正常</li>
                <li>异常</li>
                <li>异常(流程中)</li>
            </ul>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default CalendarMain
