import React from 'react'
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Todo = ({todo, toggleComplete, removeTodo}) => {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo(todo.id)
    };
  return (
    <Container className='mt-3'> 
    <div className='li-align'
    style={{
      backgroundColor: todo.completed ? "rgb(71, 239, 160)"  :null

    }}
    >
    <input 
    type="checkbox" 
    onClick={handleCheckboxClick}
    />
    <div className='li-display'>
    <li style={{
        color: "white",
        textDecoration: todo.completed ? "line-through"  :null,

    }}>{todo.task}</li>
    </div>

    <Button variant='danger' onClick={handleRemoveClick}>X</Button>
    </div>
    </Container>
  )
}

export {Todo};