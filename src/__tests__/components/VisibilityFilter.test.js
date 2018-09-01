import React from 'react';
import VisibiltyFilter from '../../components/VisibilityFilter';
import Link from '../../components/Link';
import { shallow } from 'enzyme';

it('renders the outer <div>', () => {
  const wrapper = shallow(<VisibiltyFilter />);
  expect(wrapper.find('div').length).toBe(1);
});

it('renders 3 nested <Link /> components', () => {
  const wrapper = shallow(<VisibiltyFilter />);
  expect(wrapper.find(Link).length).toBe(3);
});