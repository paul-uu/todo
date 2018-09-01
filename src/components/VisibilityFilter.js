import React from 'react';
import Link from './Link';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED  
} from '../constants';

const VisibilityFilter = props => {
  return (
    <div>
      <Link text='Show All' filter={SHOW_ALL} />
      <Link text='Show Active' filter={SHOW_ACTIVE} />
      <Link text='Show Completed' filter={SHOW_COMPLETED} />
    </div>
  )
}

export default VisibilityFilter;