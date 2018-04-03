import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

  const todos = props.store.getState();

  return (
    <ul className='todoList'>
    {
      todos.map(todo => 
        <TodoItem todo={todo} store={props.store} />
      )
    }
    </ul>
  )
}

export default TodoList;