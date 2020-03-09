import React, { useState } from 'react';
import './App.css';
// import { MDCRipple } from '@material/ripple';
// - MDC buttons and ripple installed, now I need to learn how to implement them

function App() {
  const [pokemon, setPokemon] = useState([]);

  // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")

      .then(response => response.json())

      .then(response => {setPokemon(response.results);})

      .catch(err => {
        console.log(err);
      });
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
