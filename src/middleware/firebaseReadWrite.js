import { db } from '../firebase';
import { ADD_TODO, AUTH_USER_SET } from '../constants';

export const firebaseReadWrite = store => next => action => {

  const state = store.getState();
  const uid = (state.session.authUser && state.session.authUser.uid)
    ? state.session.authUser.uid
    : null;

  if (action.type === ADD_TODO && uid !== null) {
    db.updateUserTodos(uid, [...state.todos, action.todo ]);
    return next(action);
  }
  
  return next(action);
};
