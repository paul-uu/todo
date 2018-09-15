import React from 'react';
import ConnectedTodoList, { TodoList } from '../../../components/TodoList';
import TodoItem from '../../../components/TodoItem';
import VisibilityFilter from '../../../components/VisibilityFilter';
import { shallow } from 'enzyme';
import generateId from '../../../utilities/generateId';
import { Provider } from 'react-redux';
import store from '../../../store';

const todos = [
  {
    text: 'test todo 1',
    complete: false,
    id: generateId()
  },
  {
    text: 'test todo 2',
    complete: true,
    id: generateId()
  },
  {
    text: 'test todo 3',
    complete: false,
    id: generateId()
  }    
]

it('renders the <TodoList />, unconnected', () => {
  const wrapper = shallow(<TodoList todos={todos} />);
  expect(wrapper.find('ul').length).toBe(1);
  expect(wrapper.find(TodoItem).length).toBe(todos.length);
  expect(wrapper.find(VisibilityFilter).length).toBe(1);
});