import React from 'react';
import Reader from './Reader/Reader';
import publications from './publications';
import styled5 from './App.module.css';

function App() {
  return <Reader className={styled5.body} items={publications} />;
}

export default App;
