import React from 'react';

const Tab = ({tab,handleClick,idx}) =>{
        const style ={
            backgroundColor: "black",
            color: "white"
        }
        return(
            <div style={tab.isSelected ? style : null}onClick={(e) => handleClick(e,idx)}>
                <h2>{tab.name}</h2>
            </div>

        );
}

export default Tab;
