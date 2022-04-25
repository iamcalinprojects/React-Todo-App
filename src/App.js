import './App.css';
import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {TodoList} from './TodoList';
import { Container } from 'react-bootstrap';



function App() {
  const [todos,setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id){
          return{
            ...todo,
            completed: !todo.completed
          };
        }
      })
    )
  }
  function removeTodo(id){
    setTodos(todos.filter(todo =>todo.id !== id));
  }
  return (
    <div>
      <div className="App bg-work row">
        <Container className="col-md-6 col-lg-7">
        <header className="App-header">
          <h2 className='mb-3 text-dark bold'>React Todo-App</h2>
          <TodoForm addTodo={addTodo}/>
        </header>
        </Container>
        <Container className="col-md-6 col-lg-5">
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}/>
        </Container>
      </div>
      <div>Hello World</div>
    </div>
  );
}

export default App;
