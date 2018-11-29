import {
  ADD_TODO,
  SET_USER_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  AUTH_USER_SET,
  CREATE_USER
} from '../constants';
import { db } from '../firebase';
//import { FirebaseAuth } from '@firebase/auth-types';

export const addTodo = todo => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('todos').add(todo)
    .then(() => {
      dispatch({
        type: ADD_TODO,
        todo
      });
    }).catch(err => {
      console.error(err);
      // dispatch({ type: ADD_TODO_ERROR, error: err})
    })
};

export const signUp = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.passwordOne)
    .then(response => {
      return firestore.collection('users').doc(response.user.uid).set({
        email: newUser.email,
        username: newUser.username,
        todos: []
      });
    })
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', error: err });
    })
}

export const setUserTodos = todos => ({
  type: SET_USER_TODOS,
  todos
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
export const setFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
export const setAuthUser = user => {
  return {
    type: AUTH_USER_SET,
    user
  }
};

export const userAuthenticated = user => {
  return dispatch => {
    dispatch(setAuthUser(user));
    //dispatch(setAuthUserData(user));
  }
}




export const setAuthUserData = user => {
  return dispatch => {
    dispatch(fetchAuthUserTodos(user))
  }
}
export const fetchAuthUserTodos = user => {
  return dispatch => {
    if (user) {
      return db.fetchUserTodos(user.uid)
        .then(snapshot => snapshot.val())
        .then(todos => 
          todos && dispatch(setUserTodos(todos.todos)));
    } else {
      dispatch(setUserTodos([]));
    }
  }
}