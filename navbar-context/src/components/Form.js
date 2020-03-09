import React, {useContext} from 'react';
import MyContext from '../contexts/MyContext';

const Form = ({}) => {
    const {form, setForm} = useContext(MyContext);

return(
    <div className="form">
        <label>Your Name:</label>
        <input type="text" placeholder="John Doe" value={form} onChange= {(e) => setForm(e.target.value)} /> 
    </div>

)
}

export default Form;
