import React, {useState} from 'react';
import Box from './components/Box';
import './App.css';

function App() {
  const [form, setForm] = useState(""); //this is the initial state of 'form' - an empty string.
  const [boxen, setBoxen] = useState([]); //this is the initial state of 'boxen' - an empty array.
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let box = {                         //'box' is a temp variable w/ a key of color and the color is whatever the user requests.
      color: form
    }
    setBoxen(oldboxen => [...oldboxen, box]); //pushes new box into the array
    setForm("");
  }
    const destoryBox = (e, idx) => {
      e.preventDefault();
      setBoxen([
        ...boxen.slice(0,idx)
      ].concat(boxen.slice(idx + 1)))
    }


  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Color: </label>
          <input type="text" value={form} onChange= {(e) => setForm(e.target.value)} />
        </div>
        <input type="submit" value="Add Box"  />
      </form>
        {
          boxen.map((box, idx) => {
            return  <Box color={box.color} key={idx} removeBox={destoryBox} idx={idx}/>
          })
        }

    </div>
  );
}

export default App;
