import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from './firebase/firebase';

const store = createStore(
  todoApp,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), logger),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, { 
      userProfile: 'users', 
      useFirestoreForProfile: true, 
      attachAuthIsReady: true 
    }) 
  )
);

export default store;