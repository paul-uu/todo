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

export const subscribeToUserTodos = (id) => // todo
  //db.ref(`users/${id}/todos/todos`).on('value', snapshot => {
  db.ref(`users/${id}`).on('value', snapshot => {
    console.log(snapshot);
  });

export const updateUserTodos = (id, todos) =>
  db.ref(`users/${id}/todos`).set({
    todos
  });
  
// returns all users from firebase db  
export const onceGetUsers = () => 
  db.ref('users').once('value');