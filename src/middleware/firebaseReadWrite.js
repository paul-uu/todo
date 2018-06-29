import { db } from '../firebase';
import { ADD_TODO } from '../constants';

export const firebaseReadWrite = store => next => action => {

  const state = store.getState();
  const uid = (state.session.authUser && state.session.authUser.uid)
    ? state.session.authUser.uid
    : null;
  
  if (action.type === ADD_TODO && uid !== null) {
    db.updateUsersTodos(uid, [...state.todos, action.todo ]);
    return next(action);
  }
  
  return next(action);
};
