import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore().settings({ timestampsInSnapshots: true }); 
const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
export default firebase;