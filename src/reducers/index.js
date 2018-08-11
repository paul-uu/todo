import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import session from './session';

const todoApp = combineReducers({ 
  todos, 
  visibilityFilter,
  session
});

export default todoApp;