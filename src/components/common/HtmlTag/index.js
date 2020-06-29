import React, { Component } from 'react';
import './index.scss'


class HtmlTag extends Component {
  render(){  
    return (
      <div>
 <header className="App-header">Header</header>

<ul className='tag'>
  <li id='mao'> <span>abbr：</span>The <abbr title='pppppp'>PRC</abbr> was founded in 1949 </li>
  <li> 
    <a href="mailto:m.bluth@example.com" hrefLang='en'>打开邮箱</a>  {/* mailto:  打开邮箱 */}
    &nbsp;<a href="tel: 123456">打电话</a>  {/* tel:  打电话 */}
    &nbsp;<a href="#top">返回顶部</a>  {/* #top 或 #:  返回页面顶部 */}
    &nbsp;<a href="www.baidu.com" target='_blank' rel='noopener norefferrer'>外链</a> 
    &nbsp;<a href="#email">链接到本页email处</a> 
    &nbsp;<a href="#Tel">链接到本页Tel处</a> 
  </li>

<li> 获取ul下面的li 用： <code>document.querySelectorAll('ul > li')</code></li>
  <li>
    <img
      src="https://cdn.cnviinet.com/static/yaoqing-201905091334.jpg"
      border="0"
      usemap="#example-map"
      alt="Planets" />

    {/* coords 属性与 shape 属性配合使用，来规定区域的尺寸、形状和位置。图像左上角的坐标是 "0,0"。 */}        
     {/* 
      圆形：shape="circle"，coords="x,y,z"
      多边形：shape="polygon"，coords="x1,y1,x2,y2,x3,y3,..."
      矩形：shape="rectangle"，coords="x1,y1,x2,y2" */}
      <map name="example-map" id="example-map">
      <area 
      target ="_blank"
      shape="circle" 
      coords="0,0,50" 
      href="https://www.baidu.com/" 
      alt=""
      />

      <area 
      target ="_blank"
      shape="rectangle" 
      coords="51,0,102,102" 
      href="https://www.baidu.com/" 
      alt=""
      />
    </map>
  </li>

    <li>
      <article className="day-forecast">
          <h2>03 March 2018</h2>
          <p>Rain.</p>
      </article>
    </li>

    <li>
      <a href="#mao">本页面锚链接</a>
      <a href="#mao">跨页面锚链接</a>
    </li>

    <li>
      <bdo>13232</bdo>
      <br/> 
      <bdo dir='rtl'>13232</bdo>
      <br/>
      <bdo dir='ltr'>13232</bdo>
    </li>

    <li>
      <blockquote>
      代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进（注 中说明了如何更改）。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 `cite` 元素。
      </blockquote>
      <q>若想使用在行内引用较短的内容而非创建一个单独的引用块，可使用（Quotation）元素，自带引号- q标签。</q>
    </li>

    <li>
    <table>
      <caption>Superheros and sidekicks</caption>
      <colgroup>
          <col/>
          <col span="2" class="batman"/>
          <col span="2" class="flash"/>
      </colgroup>
      <tr>
          <td> </td>
          <th scope="col">Batman</th>
          <th scope="col">Robin</th>
          <th scope="col">The Flash</th>
          <th scope="col">Kid Flash</th>
      </tr>
      <tr>
          <th scope="row">Skill</th>
          <td>Smarts</td>
          <td>Dex, acrobat</td>
          <td>Super speed</td>
          <td>Super speed</td>
      </tr>
    </table>
    </li>

    <li>
      <ul>
        <li><data value="398">迷你番茄酱</data></li>
        <li><data value="399">巨无霸番茄酱</data></li>
        <li><data value="400">超级巨无霸番茄酱</data></li>
      </ul>
    </li>
    <li>
     <del>这里是要删除文字的标签</del>
     
    </li>
    <li>
    <ins datetime='3232-32'>这一段文本是新插入至文档的。</ins>
    </li>
    <li>  
      <details>
        <summary>挂件的title</summary>
        挂件展开的内容
      </details>
    </li>

    <li>
      使用 {`<em>`} 表示强调或重读。<br/>
      使用 {`<strong>`} 表示重要性。<br/>
      使用 {`<mark>`} 表示相关性。<br/>
      使用 {`<cite>`} 标记著作名，如一本书、剧本或是一首歌。<br/>
      使用 {`<dfn>`} 标记术语的定义实例。<br/><br/>
      em: <em>强调文本</em><br/>
      strong: <strong>加粗文本</strong><br/>
      dfn: <dfn>定义项目</dfn><br/>
      code: <code>一段电脑代码</code><br/>
      samp: <samp>计算机样本</samp><br/>
      kbd:<kbd>键盘输入</kbd><br/>
      var:<var>变量</var>
    </li>

    <li>
    dialog: false
      <dialog open={false}>
        <p>Greetings, one and all!</p>
      </dialog>
    </li>

    <li>  
      <fieldset>
        <legend>Title&hellip;</legend>
        <ul>
          <li><input type="radio" value="1" id="address-switch_1" checked /><label for="address-switch_1"><input type="text" value="19 Quaker Ridge Rd. Bethel CT 06801" /></label></li>
          <li><input type="radio" value="2" id="address-switch_2" /><label for="address-switch_2"><input type="text" value="1000 Coney Island Ave. Brooklyn NY 11230" /></label></li>
          <li><input type="radio" value="3" id="address-switch_3" /><label for="address-switch_3"><input type="text" value="2962 Dunedin Cv. Germantown TN 38138" /></label></li>
          <li><input type="radio" value="4" id="address-switch_4" /><label for="address-switch_4"><input type="text" value="915 E 7th St. Apt 6L. Brooklyn NY 11230" /></label></li>
        </ul>
      </fieldset>
    </li>

    <li>  
      <figure>
      <img src="/media/examples/elephant-660-480.jpg"
    alt="Elephant at sunset"/>
    <figcaption>An elephant at sunset</figcaption>
      </figure>
    </li>

</ul>

      </div>
     )
  }
}

export default HtmlTag