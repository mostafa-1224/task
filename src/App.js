import React, { useState }from 'react';

import './App.css';

function Todo (props){
  
  const removeHandler = () =>{
    props.removeHandler(props.index);
  }
  const completeHandler = () =>{
    props.completeHandler(props.index);
  }
  const notCompleteHandler = () =>{
    props.notCompleteHandler(props.index);
  }
  return(
    <div className = 'todo'>
      <p style = {{textDecoration : props.todo.isCompleted ? 'line-through' : 'under-line' }}>{props.todo.text}</p>
      <button onClick = {notCompleteHandler}>NOT Completed</button>
      <button onClick = {completeHandler}>Completed</button>
      <button onClick = {removeHandler}>Remove</button>
    </div>
  )
}
function TodoForm (props){
  const [newTodo, setValue] = useState( '' )

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTodo) return ;
    props.addTodo(newTodo);
    setValue( '' );
  }

  return(
    <form onSubmit = {handleSubmit}>

        <label>Add Todo</label>
        <input placeholder = "Ur Todo" type = 'text'  value = {newTodo} onChange={ (e) => {setValue(e.target.value)} }/>
        <button onClick = {handleSubmit} > Add Todo </button>
    </form>
  )}

function App() {

  const [todos, setTodos] = useState(
    [
    {text : 'study',
    isCompleted : false
    },
    {
      text : 'eat',
      isCompleted : false
    },
    {
      text : 'play',
      isCompleted : false
    }])
    const addTodo = (text) => {
      const Todossss = [...todos, {text}];
      setTodos (Todossss);
    }
    const removeTodo = ind => {
      const todoss = [...todos]
      todoss.splice(ind, 1);
      setTodos(todoss);
      console.log('got clicked');
      }
      const completedTodo = ind => {
      let todoos = [...todos]
      todoos[ind].isCompleted = true;
      setTodos(todoos);
      console.log('got clicked');
      }
      const notCompletedTodo = ind => {
      let todoos = [...todos]
      todoos[ind].isCompleted = false;
      setTodos(todoos);
      console.log('got clicked from not');
      }
  return (
    <div className="App">
      <div className = "wrapper">
        <div className = 'todos-list'>
          {todos.map((todo, index) =>  <Todo notCompleteHandler = {notCompletedTodo} completeHandler = {completedTodo}  removeHandler = {removeTodo} key = {index} index = {index} todo = {todo} /> )}
          <TodoForm  addTodo = {addTodo} />
        </div>
      </div>  
      <div style = {{marginTop : "500px"}}></div>
    </div>
  );
}

export default App;
