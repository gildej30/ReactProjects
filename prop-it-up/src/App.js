import React from 'react';
import './App.css';

import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App">
      <PersonalCard firstName="Alex" lastName="Smith" age= "23" hairColor="Brown"/>
      <PersonalCard firstName="Barry" lastName="Jones" age= "34" hairColor="Black"/>
      <PersonalCard firstName="Chuck" lastName="Brown" age= "45" hairColor="Blonde"/>
      <PersonalCard firstName="Darrell" lastName="Steak" age= "56" hairColor="Red"/>
      <PersonalCard firstName="Eddy" lastName="Perez" age= "67" hairColor="Gray"/>
    </div>
  );
}

export default App;
