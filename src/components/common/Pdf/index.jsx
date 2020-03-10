// import React, { Component } from 'react';
// import './index.scss'
// import { Document, Page } from 'react-pdf';
// // import PDF from 'react-pdf-js';

// // PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';
// class Pdf extends Component {
//   state = {
//     page: 2,
//     setPages: null
//   }

//   // componentDidMount (){
//   //   const [loading, numPages] = usePdf({
//   //     file: 'test.pdf',
//   //     onDocumentComplete,
//   //     page,
//   //     canvasEl,
//   //   });
//   // }
  
//   render(){
//     // const canvasEl = useRef(null);
//     // const { canvasEl } = this.state
//     return (
//       <div className='tag'>
//       <h1>3232</h1>
//       <div className={'pdfWrapper'}>
//       <Document
//               className={'document'}
//               file={'https://pdf.netlify.com/'}
//               onLoadSuccess={this.onDocumentLoadSuccess}
//             >
//               <Page className={'page'} width={400} pageNumber={4} />
//             </Document>
//             {/* <Pagination total={numPages} current={pageNumber} /> */}
// </div>
//       {/* <PDF file={'https://pdf.netlify.com/'}></PDF> */}
//         {/* <canvas ref={canvasEl} /> */}
//          {/* <canvas id="the-canvas" style={{border:'1px  solid black'}}></canvas> */}
//       </div>
//     )
//   }
// }

// export default Pdf
import React, { Component } from 'react';
// import { pdfjs } from 'react-pdf';
// import { Document, Page } from 'react-pdf';
 
class MyApp extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        {/* <Document
          file="somefile.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document> */}
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default MyApp