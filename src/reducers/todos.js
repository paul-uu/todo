import { ADD_TODO, SET_USER_TODOS, REMOVE_TODO, TOGGLE_TODO } from '../constants';

function todos(state = {}, action) {
  switch(action.type) {
    case ADD_TODO:
    case SET_USER_TODOS:
    case REMOVE_TODO:
    case TOGGLE_TODO:
    default:
      return state;
  }
}

export default todos;