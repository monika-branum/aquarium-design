import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Tank from './components/Tank.js';
import Editor from './components/Editor.js';

function App() {
  const [buddy, setBuddy] = useState('');
  const [axolotl, setAxolotl] = useState('');
  const [coral, setCoral] = useState('');
  const [affirmations, setAffirmations] = useState([]);
  return (
    <div className="App">
      <Header />
      <Tank buddy={buddy} axolotl={axolotl} coral={coral} affirmations={affirmations} />
      <Editor
        setBuddy={setBuddy}
        setAxolotl={setAxolotl}
        setCoral={setCoral}
        setAffirmations={setAffirmations}
      />
    </div>
  );
}

export default App;
