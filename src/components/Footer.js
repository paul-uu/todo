import React from 'react';
import Link from './Link';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants';

const Footer = (props) => {
  return (
    <footer className='footer'>
      Show:
      {' '}
      <Link 
        filter={SHOW_ALL}
        store={props.store}
        text={'All'} />{' '}
      <Link 
        filter={SHOW_ACTIVE}
        store={props.store}
        text={'Active'} />{' '}
      <Link 
        filter={SHOW_COMPLETED}
        store={props.store}
        text={'Completed'} />
    </footer>
  )
}

export default Footer;