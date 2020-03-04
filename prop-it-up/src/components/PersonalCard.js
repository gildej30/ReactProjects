import React, { Component } from 'react';

class PersonalCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {firstName, lastName,age,hairColor} = this.props;
        return( 
            <div>
                <h2>{firstName} {lastName}</h2>
                <h3>Age:{age}</h3>
                <h3>Hair Color:{hairColor}</h3>
            </div>
        );
    }
}

export default PersonalCard;