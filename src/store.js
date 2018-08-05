import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';
import { db } from './firebase';

const store = createStore(
  todoApp, 
  applyMiddleware(thunk)
);

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

export default store;