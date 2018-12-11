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

const filterTodos = (todos = {}, filter) => {
  let isComplete
  switch (filter) {
    case SHOW_ACTIVE:
      isComplete = false;
      return filterBy(todos, isComplete);
    case SHOW_COMPLETED:
      isComplete = true;
      return filterBy(todos, isComplete); 
    case SHOW_ALL:
    default:
      return todos;
  }
}

const filterBy = (todos, isComplete) => {
  let filteredTodos = {};
  for (let todoId in todos) {
    if (todos[todoId].isComplete === isComplete)
      filteredTodos[todoId] = todos[todoId];
  }
  return filteredTodos;
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
                id={id}
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

const mapStateToProps = state => {
  let todos;
  if ( 'users' in state.firestore.data ) {
    const uid = state.firebase.auth.uid;
    todos = uid ? state.firestore.data.users[uid].todos : {};
  } else {
    todos = {};
  }
  return {
    todos: filterTodos(todos, state.visibilityFilter)
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: 'users' }] ) 
)(TodoList);