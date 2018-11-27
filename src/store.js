import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { db } from './firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from './firebase/firebase';

const store = createStore(
  todoApp,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), logger),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)    
  )
);

/*
let currentState = store.getState();
const unsubscribe = store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();

  handleTodoSyncWithDB(previousState, currentState);
});

const handleTodoSyncWithDB = (previousState, currentState) => {
  let currentAuthUser = currentState.session.authUser;
  if (currentAuthUser !== null && (previousState.todos !== currentState.todos)) {
    let userId = currentAuthUser.uid;
    let localTodos = currentState.todos;
    db.syncTodosLocalToDb(userId, localTodos);
  } else {
    return;
  }
}
*/

export default store;