import React from 'react';


const NumberPage = props =>{
    const style = {
        background: props.background,
        color: props.color
    }

    if (isNaN(props.id) == true)
    {
    return (
        <div>
            <h1 style={style} >The word is: {props.id}!</h1>
        </div>
    );
    }

    else
    {
        return (
            <div>
                <h1>The number is: {props.id}!</h1>
            </div>
        );
    }
}

export default NumberPage;