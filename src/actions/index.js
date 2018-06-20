import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  AUTH_USER_SET,
  USERS_SET
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
  }),
  setAuthUser: user => ({
    type: AUTH_USER_SET,
    user
  }),
  setUsers: users => ({
    type: USERS_SET,
    users
  })
}

export default actionCreators;