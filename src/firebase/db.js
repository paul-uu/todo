import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  // User object created at, and retreived from 
  // resource path users/<id>
  db.ref(`users/${id}`).set({ 
    username,
    email
  });

  
export const getUserTodos = (id) =>
  db.ref(`users/${id}/todos`).once('value');

export const fetchUserTodos = id => 
  db.ref(`users/${id}/todos`).once('value');

export const subscribeToUserTodos = (id) => // todo
  //db.ref(`users/${id}/todos/todos`).on('value', snapshot => {
  db.ref(`users/${id}`).on('value', snapshot => {
    console.log(snapshot);
  });

export const writeUserTodosToDb = (id, todos) =>
  db.ref(`users/${id}/todos`).set({
    todos
  });


export const syncTodosLocalToDb = (id, localTodos) => {
  fetchUserTodos(id) // compare local and remote todos
    .then(snapshot => {
      let dbTodos = snapshot.val() ? snapshot.val().todos : null;
      if (dbTodos !== localTodos)
      writeUserTodosToDb(id, localTodos);
    });
}