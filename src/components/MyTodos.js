import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const MyTodos = props =>
  <div className='content-container'>
    <TodoForm />
    <TodoList />
  </div>

export default MyTodos;