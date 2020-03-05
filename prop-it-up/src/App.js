import React, { Component } from 'react';
import './App.css';
import PersonalCard from './components/PersonalCard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons :[
        {
          firstName: "Jason",
          lastName: "Smith",
          age: 23,
          hairColor: "Brown"
        },
        {
          firstName: "Olivia",
          lastName: "Smith",
          age: 22,
          hairColor: "Blonde"
        },
        {
          firstName: "Ruth",
          lastName: "Smith",
          age: 1,
          hairColor: "Brown"
        }
    ]}
    this.handleAgeClick = this.handleAgeClick.bind(this);
  }

  //you need the idx b/c we've mapped in the PersonalCard component that requires it.
handleAgeClick(e, idx){
  e.preventDefault();
  this.setState(prevState => {
    return {
      age: prevState.persons[idx].age ++
    }
  })
}

  render(){
    return(
      <div className="App">
        {
        this.state.persons.map((p,idx) => {
          return <PersonalCard 
                    firstName={p.firstName}
                    lastName={p.lastName}
                    age={p.age}
                    hairColor={p.hairColor}
                    key={idx}
                    idx={idx}
                    handleClick={this.handleAgeClick}
                  />
        })
      }
      </div>
    );
  }
}

export default App;
