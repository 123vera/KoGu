import { Cascader } from 'antd'
import React from 'react'
import COUNTRIES from '../json/add/countries-add.json'
import STATES from '../json/add/states-add.json'
import CITIES from '../json/add/cities-add.json'

// ./add .... 扩充数据后的json
// ./origin ....原数据后的json

// continents   亚洲、欧洲 etc.
// countries  中国、法国 etc.
// states   安徽、山西 etc.
// cities
// regions
// https://github.com/wizardcode/world-area/blob/master/children/json/continents.json


let combArr = COUNTRIES["RECORDS"].map((a, k1) => (
    {
        value: a.cname,
        label: a.cname,
        children: STATES["RECORDS"].filter(b => b.country_id === a.id).length !== 0
            ? [
                ...STATES["RECORDS"].filter(b => b.country_id === a.id).map((c, k2) => (
                    {
                        value: c.cname,
                        label: c.cname,
                        children: CITIES["RECORDS"].filter(b => b.state_id === c.id).length !== 0 ?
                            [
                                ...CITIES["RECORDS"].filter(b => b.state_id === c.id).map((d, k3) => (
                                    {
                                        value: d.cname,
                                        label: d.cname,
                                    }
                                ))
                            ] : null
                    }
                ))
            ] : null
    }
))

console.log('combArr', combArr, combArr.filter(i => i.children !== null && i.children.length !== 0).slice(0, 2))


const Index = () => {
    return (
        <div className="worldArea" style={{ minHeight: '100vh' }}>
            <h3>世界国家城市联动</h3>

            <div>
                combArr: <Cascader
                    style={{ width: '400px' }}
                    options={
                        combArr.filter(i => i.children !== null && i.children.length !== 0)}
                />
            </div>

        </div>
    )
}

export default Index