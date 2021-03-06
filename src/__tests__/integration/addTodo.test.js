import setupStore from '../../utilities/testingUtilities/setupStore';
import flushAllPromises from '../../utilities/testingUtilities/flushAllPromises';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from '../../components/App';
import TodoItem from '../../components/TodoItem';
import { SHOW_ALL } from '../../constants';

const initialState = {
  todos: [],
  visibilityFilter: SHOW_ALL,
  session: { testUser: { uid: '12345' } }
};
const testTodoText = 'test todo';
const store = setupStore(initialState);
let wrapper = mount(
  <Provider store={store}>
    <App />
  </Provider>
);
const todoForm = wrapper.find('.todo-form');
const todoInput = wrapper.find('input[type="text"]');
const todoButton = wrapper.find('button[type="submit"]');


it('should render the todo form', () => {
  expect(todoForm.length).toBe(1);
  expect(todoInput.length).toBe(1);
  expect(todoButton.length).toBe(1);
});


it('should add a todo to redux state and UI', () => {
  todoInput.simulate('change', {
    target: { value: testTodoText }
  });
  todoForm.simulate('submit');

  return flushAllPromises().then(() => {

    // Clear input
    expect(todoInput.props().value.length).toBe(0);

    // Check Redux state and UI
    const todos = store.getState().todos;
    expect(todos.length).toBe(1);
    expect(todos[0].text).toEqual(testTodoText);
    expect(wrapper.find(TodoItem).length).toBe(1);
  });
});