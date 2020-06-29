import html2canvas from 'html2canvas';
import Canvas2Image from './canvas2image.js';
// 参考https://juejin.im/post/5df2e8ab6fb9a0163770816d

const opts = {
  useCORS   : true,   // 允许使用跨域图片
  allowTaint: false   // 不允许跨域图片污染画布
};

/**
 * 基础版快照方案
 * @param {HTMLElement} container
 * @param {object} options html2canvas相关配置
 */

export function convertToImage(container, options = {...opts}) {

  // 输入container目标节点，返回包含container视图内容的canvas对象， options为配置项参数
  return html2canvas(container, options).then(canvas => {

      const imageEl = Canvas2Image.convertToGIF(canvas, canvas.width, canvas.height);
      return imageEl;
  });
}



