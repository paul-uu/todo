import * as actions from '../../actions';
import * as actionTypes from '../../constants';

it('should create a todo action', () => {
  const todo = {
    text: 'Learn testing',
    isComplete: false,
    id: 123
  };
  const expectedTodoAction = {
    type: actionTypes.ADD_TODO,
    todo
  };
  expect(actions.addTodo(todo)).toEqual(expectedTodoAction);
});

it('should create a setUserTodos action', () => {
  const todos = [
    { text: 'Get toothpaste', isComplete: false, id: 1 },
    { text: 'walk the dog', isComplete: true, id: 2 }
  ];
  const expectedSetUserTodosAction = {
    type: actionTypes.SET_USER_TODOS,
    todos
  };
  expect(actions.setUserTodos(todos)).toEqual(expectedSetUserTodosAction);
});

it('should create a removeTodos action', () => {
  const todoId = 123;
  const expectedRemoveTodosAction = {
    type: actionTypes.REMOVE_TODO,
    id: todoId
  };
  expect(actions.removeTodo(todoId)).toEqual(expectedRemoveTodosAction);
});

it('should create a toggleTodo action', () => {
  const todoId = 123;
  const expectedToggleTodosAction = {
    type: actionTypes.TOGGLE_TODO,
    id: todoId
  };
  expect(actions.toggleTodo(todoId)).toEqual(expectedToggleTodosAction);
});

it('should create a setFilter action', () => {
  const filter = 'SHOW_ALL';
  const expectedSetFilterAction = {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
  expect(actions.setFilter(filter)).toEqual(expectedSetFilterAction);
});

it('should create a setAuthUser action', () => {
  const user = { uid: 123 };
  const expectedSetAuthUserAction = {
    type: actionTypes.AUTH_USER_SET,
    user
  };
  expect(actions.setAuthUser(user)).toEqual(expectedSetAuthUserAction);
});