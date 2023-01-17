import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Tank from './components/Tank.js';
import Editor from './components/Editor.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Tank />
      <Editor />
    </div>
  );
}

export default App;
