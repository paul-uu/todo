import { ADD_TODO, SET_USER_TODOS, REMOVE_TODO, TOGGLE_TODO } from '../constants';

function todos(state = {}, action) {
  switch(action.type) {
    case ADD_TODO:
      return state;
    case SET_USER_TODOS:
      return action.todos;
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => todo.id !== action.id ?
        todo : Object.assign({}, todo, { complete: !todo.complete }));
    default:
      return state;
  }
}

export default todos;