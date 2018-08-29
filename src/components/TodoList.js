import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import VisibilityFilter from './VisibilityFilter'

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

const TodoList = props => {
  return (
    <div>
      <ul className='todoList'>
      {
        (props.todos.length > 0) && props.todos.map(todo => 
          <TodoItem todo={todo} key={todo.id} />
        )
      }
      </ul>
      <VisibilityFilter />
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    todos: filterTodos(state.todos, state.visibilityFilter)
  }
}
export default connect(mapStateToProps)(TodoList);