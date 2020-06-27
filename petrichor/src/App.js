import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';

import Particles from 'react-particles-js';

//initiate Apollo Client to a single endpoint
const client = new ApolloClient({
  ur: '/graphql'
});

function App() {
  //flame count initializes to zero on user
  const [flame, setFlame] = useState(0);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={() => setFlame(flame+1)}>
        Set New Flame
      </button>
    </div>
  );
}

export default App;
