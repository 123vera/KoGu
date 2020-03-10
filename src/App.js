import React from 'react';
import './App.css';
import InputItem from 'components/common/InputItem'
import HtmlTag from 'components/common/HtmlTag'
import Pdf from 'components/common/Pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <InputItem/>
      <HtmlTag/>
      {/* <Pdf/> */}
    </div>
  );
}

export default App;
