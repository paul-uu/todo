import {
  ADD_TODO,
  ADD_TODO_ERROR,
  SET_USER_TODOS,
  REMOVE_TODO,
  REMOVE_TODO_ERROR,
  TOGGLE_TODO,
  TOGGLE_TODO_ERROR,
  SET_VISIBILITY_FILTER,
  AUTH_USER_SET,
  CREATE_USER
} from '../constants';
import { db } from '../firebase';
import generateId from '../utilities/generateId';

export const addTodo = todo => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  const uid = getState().firebase.auth.uid;
  const userRef = firestore.collection('users').doc(uid);

  userRef.get().then(doc => {
    let todos = doc.data().todos;
    userRef.update({
      todos: {
        ...todos,
        [generateId()]: todo
      }
    }).then(() => {
      dispatch({ type: ADD_TODO });
    }).catch(err => {
      dispatch({ type: ADD_TODO_ERROR, error: err });
    });
    

  });
};

export const removeTodo = id => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  const uid = getState().firebase.auth.uid;
  const userRef = firestore.collection('users').doc(uid);

  userRef.update({
    [`todos.${id}`]: firebase.firestore.FieldValue.delete()
  }).then(() => {
    dispatch({ type: REMOVE_TODO })
  }).catch(err => {
    dispatch({ type: REMOVE_TODO_ERROR, error: err })
  });
};

export const toggleTodo = id => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const uid = getState().firebase.auth.uid;
  const userRef = firestore.collection('users').doc(uid);
  userRef.get().then(doc => {
    const isComplete = doc.data().todos[id].isComplete;
    userRef.update({
      [`todos.${id}.isComplete`]: !isComplete
    }).then(() => {
      dispatch({ type: TOGGLE_TODO })
    }).catch(err => {
      dispatch({ type: TOGGLE_TODO_ERROR, error: err })
    })
  })
};

export const setFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const signUp = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.passwordOne)
    .then(response => {
      return firestore.collection('users').doc(response.user.uid).set({
        email: newUser.email,
        username: newUser.username,
        todos: [],
        newTodos: {}
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