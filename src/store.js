import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import thunk from 'redux-thunk';
import { firebaseReadWrite } from './middleware/firebaseReadWrite';

const store = createStore(
  todoApp, 
  applyMiddleware(thunk, firebaseReadWrite)
);

export default store;