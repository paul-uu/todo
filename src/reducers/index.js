import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants';

function todoReducer(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map(todo => todo.id !== action.id ?
        todo : Object.assign({}, todo, { complete: !todo.complete }));
    default:
      return state;
  }
}

export default todoReducer;