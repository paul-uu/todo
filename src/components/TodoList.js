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
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.isComplete);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.isComplete);
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
  console.log(state.firestore.data);
  let todos;
  if ( 'users' in state.firestore.data ) {
    const uid = state.firebase.auth.uid;
    todos = uid ? state.firestore.data.users[uid].todos : {};
  } else {
    todos = {};
  }
  return {
    //todos: filterTodos(todos, state.visibilityFilter)
    todos
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect( [{ collection: 'users' }] ) 
)(TodoList);