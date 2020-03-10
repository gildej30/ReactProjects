import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import HomePage from './components/Home';
import NumberPage from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home" />
        <NumberPage path="/:id/:color/:background" />
      </Router>
    </div>
  );
}

export default App;
