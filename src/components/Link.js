import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../actions';

const Link = (props) => {
  function handleClick() {
    props.dispatch( actionCreators.setFilter( props.filter ) );
  }
  const isFilterSelected = props.visibilityFilter === props.filter;

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

function mapStateToProps(state, ownProps) {
  return {
    text: ownProps.text,
    filter: ownProps.filter,
    visibilityFilter: state.visibilityFilter
  }
}
export default connect(mapStateToProps)(Link);