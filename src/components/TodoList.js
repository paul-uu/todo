import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import VisibilityFilter from './VisibilityFilter';
import { firestoreConnect } from 'react-redux-firebase';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants';

const filterTodos = (todos = [], filter) => {
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

export const TodoList = (props = {}) => {
  const { todos } = props;
  return (
    <div>
      <ul className='todo-list'>
      {
        todos && Object.keys(todos).map(id => {
          if (todos[id] !== null) {
            return (
              <TodoItem 
                key={id}
                todo={todos[id]} />
            )
          }
        })
      }
      </ul>
      <VisibilityFilter />
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  //todos: filterTodos(state.firestore.data.todos, state.visibilityFilter)
  todos: state.firestore.data.todos
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: 'todos' }] ) 
)(TodoList);