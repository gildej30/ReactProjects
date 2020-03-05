import React from 'react';

const PersonalCard = ({firstName, lastName, age, hairColor, idx, handleClick}) => {
    return(
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={(e) => handleClick(e, idx)}>Birthday</button>
        </div>
    )
}

export default PersonalCard;