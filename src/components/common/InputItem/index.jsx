import React, { Component } from 'react';
import './index.scss'


class InputItem extends Component {
  state = {
    tabIndex: 0
  }
  render(){
    const { tabIndex } = this.state
    return (
      <form className='input-wrapper'>

      <label htmlFor="text">
        <span>Text ：</span>
        <input type="text" id='text'/>
      </label>

      <label htmlFor="color">
        <span>Color ：</span>
        <input type="color" id='color'/>
      </label>

      <label htmlFor="date">
        <span>Date ：</span>
        <input type="date" id='date'/>
      </label>

      <label htmlFor="time">
        <span>Time ：</span>
        <input type="time" id='time'/>
      </label>

      <label htmlFor="datetime">
        <span>Datetime ：</span>
        <input type="datetime-local" id='datetime'/>
      </label>

     {/* multiple 允许输入多个邮件地址（用逗号分隔）； list 规定默认列表 */}
     <label htmlFor="email">
        <span>Email ：</span>
        <input type="email" required size="1" id='email' multiple list="defaultEmails"/>
        <datalist id="defaultEmails">
          <option value="jbond007@mi6.defence.gov.uk"/>
          <option value="jbourne@unknown.net"/>
          <option value="nfury@shield.org"/>
          <option value="tony@starkindustries.com"/>
          <option value="hulk@grrrrrrrr.arg"/>
        </datalist>
      </label>

      <label htmlFor="range">
        <span>Range ：</span>
        <input type="range"  step='1' id='range' max='100' min='10'/>
      </label>

      <label htmlFor="tel">
        <span>Tel ：</span>
        <input type="tel" autoComplete='on' />
      </label>
     
      <label htmlFor="url">
        <span>Url ：</span>
        <input type="url" tabIndex={tabIndex} />
      </label>

      <label htmlFor="week">
        <span>Week ：</span>
        <input type="week" tabIndex='2' />
      </label>
      
      <label htmlFor="password">
        <span>Password ：</span>
        <input type="password" tabIndex='2' autoComplete='new-password'/>
      </label>
      
      <label htmlFor="image">
        <span>Image ：</span>
        <input type="image" alt={'/img/logo.png'}/>
      </label>

      <button type='submit'>提交</button>
      </form>
    )
  }
}

export default InputItem