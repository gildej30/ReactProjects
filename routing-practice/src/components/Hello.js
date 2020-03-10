import React from 'react';
import { navigate } from '@reach/router';

const HelloPage = props => {
    if (isNaN(props.id) == false)
    {
        navigate(`/${props.id}`);
    }

    else
    {
        return (
            <div>
                <h1>The word is: {props.id}!</h1>
            </div>
        );
    }
}

export default HelloPage;