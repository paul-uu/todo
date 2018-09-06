import React from 'react';
import FilterLink from './FilterLink';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED  
} from '../constants';

const VisibilityFilter = props => {
  return (
    <div className='visibility-filter'>
      <FilterLink className='visibility-filter--link' text='Show All' filter={SHOW_ALL} />
      <FilterLink className='visibility-filter--link' text='Show Active' filter={SHOW_ACTIVE} />
      <FilterLink className='visibility-filter--link' text='Show Completed' filter={SHOW_COMPLETED} />
    </div>
  )
}

export default VisibilityFilter;