import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

  return (
    <ul className='todoList'>
    {
      props.todos.map(todo => 
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          removeTodo={props.removeTodo}/>
      )
    }
    </ul>
  )
}

export default TodoList;