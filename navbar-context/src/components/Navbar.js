import React, {useContext} from 'react';
import MyContext from '../contexts/MyContext';

const Navbar = ({}) => {
    const {form} = useContext(MyContext);
    
    const style = {
        background: "purple",
        color: "white"
    }
    
    return(
        <div>
            <h3 style={style}>Hello {form}</h3>
        </div>
    
    )
}

export default Navbar;