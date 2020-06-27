import React from 'react';
import { useState } from 'react-hooks';
import logo from './logo.svg';
import './App.css';

function App() {
  //flame count initializes to zero on user
  const [flame, setFlame] = useState(0);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={() => setFlame(flame+1)}>
        New Flame
      </button>
    </div>
  );
}

export default App;
