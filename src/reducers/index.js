import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import session from './session';
import user from './user';

const todoApp = combineReducers({ 
  todos, 
  visibilityFilter,
  session,
  user
});

export default todoApp;