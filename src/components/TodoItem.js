import React from 'react';
import actionCreators from '../actions';

const TodoItem = (props) => {
  return (
    <li
      className='todoItem'
      style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}}
      onClick={() => props.store.dispatch(actionCreators.toggleTodo(props.todo.id))} >
      { props.todo.text }
      <button onClick={() => props.store.dispatch(actionCreators.removeTodo(props.todo.id))}>X</button>
    </li>
  )
}

export default TodoItem;