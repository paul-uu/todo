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

it('should delete a todo from redux state and UI', () => {

  // add todo
  todoInput.simulate('change', {
    target: { value: testTodoText }
  });
  todoForm.simulate('submit');
  return flushAllPromises().then(() => {

    // delete todo
    const deleteBtn = wrapper.find('button.delete-button');
    deleteBtn.simulate('click');

    // Check Redux state and UI
    const todos = store.getState().todos;
    expect(todos.length).toBe(0);
    expect(wrapper.find(TodoItem).length).toBe(0);
  });
});