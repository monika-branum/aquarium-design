import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Tank from './components/Tank.js';
import Editor from './components/Editor.js';

function App() {
  const [buddy, setBuddy] = useState('');
  return (
    <div className="App">
      <Header />
      <Tank buddy={buddy} />
      <Editor setBuddy={setBuddy} />
    </div>
  );
}

export default App;
