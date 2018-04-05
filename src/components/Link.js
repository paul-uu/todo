import React from 'react';
import actionCreators from '../actions';

const Link = (props) => {
  function handleClick() {
    props.store.dispatch( actionCreators.setFilter( props.filter ) );
  }
  const isFilterSelected = props.store.getState().visibilityFilter == props.filter;

  return (
    <a 
      href='#' 
      className='link' 
      style={{textDecoration: isFilterSelected ? 'underline' : 'none'}}
      onClick={handleClick} >
      {props.text}
    </a>
  )
}

export default Link;