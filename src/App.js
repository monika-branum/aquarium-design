import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Tank from './components/Tank.js';
import Editor from './components/Editor.js';

function App() {
  const [buddy, setBuddy] = useState('');
  const [axolotl, setAxolotl] = useState('');
  const [coral, setCoral] = useState('');
  return (
    <div className="App">
      <Header />
      <Tank buddy={(buddy, axolotl, coral)} />
      <Editor setBuddy={setBuddy} setAxolotl={setAxolotl} setCoral={setCoral} />
    </div>
  );
}

export default App;
