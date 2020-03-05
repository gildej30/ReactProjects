import React, { useState } from 'react';

const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
setFormState({
    ...formState,
    submitted: true
})

    }

    let message = <h1>You haven't submitted the form completely yet.</h1>;
    if(formState.submitted){
        message = <h1>You submitted your form. Great Jrrb!</h1>;
    }

    return(
        <div>
        <h1>Please fill out your form below.</h1>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {formState.firstName.length < 2 ? <p>Needs to be at least 2 chars</p>:<p>params good</p>}
                <br/> 

                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {formState.lastName.length < 2 ? <p>Needs to be at least 2 chars</p>:<p>params good</p>}
                <br/>   

                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {formState.email.length < 5 ? <p>Needs to be at least 5 chars</p>:<p>params good</p>}
                <br/>

                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {formState.password.length < 8 ? <p>Needs to be at least 8 chars</p>:<p>params good</p>}
                <br/>

                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                {formState.confirmPassword.length < 8 ? <p>Lenth needs to be at least 8 chars</p>:<p>length good</p>}
                {formState.confirmPassword !== formState.password ? <p>Confirmation needs to be the same as password</p>:<p>password and pass confirm good.</p>}
                <br/> 
                
                <input type="submit" />     
            </form>
            {message}
            <p><b>First Name: </b>{formState.firstName}</p>
            <p><b>Last Name: </b>{formState.lastName}</p>
            <p><b>Email: </b>{formState.email}</p>
            <p><b>Password: </b>{formState.password}</p>
            <p><b>Confirm Password: </b>{formState.confirmPassword}</p>
        </div>
    );
}

export default RegisterForm;
