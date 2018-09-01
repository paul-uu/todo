import React from 'react';
import TodoItem from '../../components/TodoItem';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';

import generateId from '../../utilities/generateId';

const todoId = generateId();
const todo = {
  text: 'Learn TDD',
  complete: true,
  id: todoId
};

it('renders', () => {
  const todoItem = shallow(<TodoItem todo={todo} key={todoId} store={store} />);
 expect(todoItem.findWhere(
   n => n.type() === 'li' && n.contains(todo.text)
 ));
 expect(todoItem.findWhere(
  n => n.type() === 'li' && n.to.have.property('text-decoration', 'line-through')
));

});