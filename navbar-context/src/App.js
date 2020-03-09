import React, {useState} from 'react';
import MyContext from './contexts/MyContext';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import './App.css';

function App() {

  const [form, setForm] = useState(""); 
  
  return (
    <div className="App">

    <MyContext.Provider value={{form, setForm}}>

        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>

    </MyContext.Provider>

    </div>
  );
}

export default App;
