const ADD_TODO = 'ADD_TODO',
      REMOVE_TODO = 'REMOVE_TODO',
      TOGGLE_TODO = 'TOGGLE_TODO';

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
  })
}

export default actionCreators;