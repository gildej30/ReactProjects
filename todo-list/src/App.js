import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      task: form,
      isClicked: false
    }
    setTodos(oldTodos => [...oldTodos, todo]);
    setForm(""); //this resets the input stuff after submitting the task
  }

  const handleCheck = (e, idx) => {
    let todo = todos[idx];
    todo.isClicked = !todo.isClicked;
    setTodos([...todos.slice(0,idx), todo,...todos.slice(idx+1)])
  }

  const handleDestroy = (e, idx) => {
    e.preventDefault();
    setTodos([...todos.slice(0,idx), ...todos.slice(idx+1)]);
  }

  return (
    <div className="App">
      <div>
        { //you can only MAP an ARRAY. MAP also takes in an empty function 
          todos.map((todo, idx) => {
            return <Todo key={idx} 
                          todo={todo} 
                          idx={idx} 
                          handleCheck={handleCheck} 
                          handleDestory={handleDestroy}/> //if i MAP something, this NEEDS A KEY - which is the key={idx} and the VALUE is the todo={todo}
          })
        }
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>To Do Task:</label>
          <input type="text" value={form} onChange={(e) => setForm(e.target.value) } />
        </div>
        <input type="submit" value="Add Todo item" className="submit-btn" />
      </form>
    </div>
  );
}

export default App;