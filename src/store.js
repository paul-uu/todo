import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { firebaseReadWrite } from './middleware/firebaseReadWrite';

const store = createStore(
  todoApp, 
  applyMiddleware(firebaseReadWrite)
);

export default store;