import {
  ADD_TODO,
  SET_USER_TODOS,
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
  setUserTodos: todos => ({
    type: SET_USER_TODOS,
    todos
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
  setAuthUser: user => {
    return {
      type: AUTH_USER_SET,
      user
    }
  },
  setUsers: users => ({
    type: USERS_SET,
    users
  })
}

export default actionCreators;