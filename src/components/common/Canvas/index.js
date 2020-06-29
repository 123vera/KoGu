// https://cdn.cnviinet.com/viinet-app-web-v2/static/linkafeiquan-202006101045.jpg
import html2canvas from 'html2canvas';
import Canvas2Image from 'http://hongru.github.io/proj/canvas2image/canvas2image.js';


function convertToImage(container, options = {}) {

  // 输入container目标节点，返回包含container视图内容的canvas对象， options为配置项参数
  return html2canvas(container, options).then(canvas => {
      const imageEl = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
      return imageEl;
  });
}

convertToImage()