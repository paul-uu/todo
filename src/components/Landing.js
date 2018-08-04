import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Landing = props =>
  <div>
    <h1>Landing Page</h1>
    <TodoForm />
    <TodoList />
  </div>

export default Landing;