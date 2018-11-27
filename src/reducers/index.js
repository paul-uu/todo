import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import session from './session';
import { firestoreReducer } from 'redux-firestore'; // reducer for syncing local redux store with firestore db

const todoApp = combineReducers({ 
  todos, 
  visibilityFilter,
  session,
  firestore: firestoreReducer
});

export default todoApp;