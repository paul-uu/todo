import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from '../constants';


const actionCreators = {
  addTodo: todo => ({
    type: ADD_TODO,
    todo
  }),
  removeTodo: id => ({
    type: REMOVE_TODO,
    id
  }),
  toggleTodo: id => ({
    type: TOGGLE_TODO,
    id
  }),
  setFilter: (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
  })
}

export default actionCreators;