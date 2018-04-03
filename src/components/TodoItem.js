import React from 'react';

const TodoItem = (props) => {
  return (
    <li
      className='todoItem'
      style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}}
      onClick={ () => { props.toggleTodo(props.todo.id) } }>
      { props.todo.text }
      <button onClick={ () => { props.removeTodo(props.todo.id) } }>X</button>
    </li>
  )
}

export default TodoItem;