import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  // User object created at, and retreived from 
  // resource path users/<id>
  db.ref(`users/${id}`).set({ 
    username,
    email
  });

// returns all users from firebase db  
export const onceGetUsers = () => 
  db.ref('users').once('value');