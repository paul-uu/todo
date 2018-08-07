import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const MyTodos = props =>
  <div>
    <h1>My Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>

export default MyTodos;