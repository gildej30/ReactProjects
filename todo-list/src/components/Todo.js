import React from 'react';

//todo is my OBJ - which is why there is: todo.isChecked, todo.task...
const Todo = ({todo, handleCheck, handleDestory, idx}) => {
const style ={
    textDecoration: "line-through"
}

    return(
        <div>
            <p style={todo.isClicked ? style: null}>
                {todo.task}</p>
                <input type="checkbox" checked={todo.isClicked} onClick={(e) => handleCheck(e,idx)} readOnly/>
                <button className="button" onClick={(e) => handleDestory(e,idx)} disabled={todo.isClicked ? false: true} >Delete</button>
        </div>
    )
}

export default Todo;