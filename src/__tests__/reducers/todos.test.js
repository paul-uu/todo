import reducer from '../../reducers/todos';
import * as actionTypes from '../../constants';

const initialState = [];
const todoId = 123;
const todo = {
  text: 'Learn TDD',
  complete: false,
  id: todoId
}

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([]);
});

it('should add a todo when the ADD_TODO action is dispatched', () => {
  expect(reducer(initialState, {
    type: actionTypes.ADD_TODO,
    todo
  }))
  .toEqual([todo])
});

it(`it should set a user's todos when the SET_USER_TODOS action is dispatched`, () => {
  expect(reducer(initialState, { type: actionTypes.SET_USER_TODOS, todos: [todo] }))
  .toEqual([todo])
});

it(`should remove a todo by it's ID when the REMOVE_TODO action is dispatched`, () => {
  expect(reducer([todo], { type: actionTypes.REMOVE_TODO, id: todoId }) )
  .toEqual([])
});

it(`should toggle a todo by it's ID when the TOGGLE_TODO action is dispatched`, () => {
  expect(reducer([todo], { type: actionTypes.TOGGLE_TODO, id: todoId }) )
  .toEqual([
    {
      text: 'Learn TDD',
      complete: true,
      id: todoId
    }
  ])
});
