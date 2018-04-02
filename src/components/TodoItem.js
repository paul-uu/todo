import React from 'react';

const TodoItem = (props) => {
  return (
    <li
      className='todoItem'>
      { props.todo.text }
      <button onClick={props.removeTodo.bind(null, props.todo.id)}>X</button>
    </li>
  )
}

export default TodoItem;