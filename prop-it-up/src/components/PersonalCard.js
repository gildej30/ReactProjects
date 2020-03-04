import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={props.age}>Birthday</button>
    )
}

class PersonalCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : 1
        }
    }

    birthday = () => {
        this.setState({
            age: this.state.age += 1

        })
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return( 
            <div>
                <h2>{firstName} {lastName}</h2>
                <h3>Hair Color:{hairColor}</h3>
                <h3>Age:{age}</h3>
                <Button birthday={this.age} age={this.state.age}/>
            </div>
        );
    }
}

export default PersonalCard;