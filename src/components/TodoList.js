import React from 'react';
import TodoItem from './TodoItem';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.complete);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.complete);
    case SHOW_ALL:
    default:
      return todos;
  }
}

const TodoList = (props) => {
  const state = props.store.getState();
  const todos = filterTodos(state.todos, state.visibilityFilter);
  return (
    <ul className='todoList'>
    {
      todos.map(todo => 
        <TodoItem todo={todo} key={todo.id} store={props.store} />
      )
    }
    </ul>
  )
}

export default TodoList;