import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
// import { MDCRipple } from '@material/ripple';
// - MDC buttons and ripple installed, now I need to learn how to implement them

function App() {
  const [pokemon, setPokemon] = useState([]);

  // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

  const handleClick = (e) => {
    e.preventDefault();

    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807')
    
    .then(response => {setPokemon(response.data.results);})
    
    .catch(err => {
      console.log(err)});
    }
  
  return (
      <div className="App">
        <button onClick={(e) => handleClick(e)} type="submit">Fetch Pokemon</button>
          {pokemon.map((pokemon, idx) => {
              return <p
                key={idx}>
                {pokemon.name}
              </p>
            })}
      </div>
  );
}

export default App;
