import React from 'react';
import VisibiltyFilter from '../../../components/VisibilityFilter';
import FilterLink from '../../../components/FilterLink';
import { shallow } from 'enzyme';

it('renders the outer <div>', () => {
  const wrapper = shallow(<VisibiltyFilter />);
  expect(wrapper.find('div').length).toBe(1);
});

it('renders 3 nested <FilterLink /> components', () => {
  const wrapper = shallow(<VisibiltyFilter />);
  expect(wrapper.find(FilterLink).length).toBe(3);
});