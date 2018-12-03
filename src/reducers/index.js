import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import session from './session';
import { firestoreReducer } from 'redux-firestore'; // reducer for syncing local redux store with firestore db
import { firebaseReducer } from 'react-redux-firebase';

const todoApp = combineReducers({ 
  todos, 
  visibilityFilter,
  session,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default todoApp;