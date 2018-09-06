import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../actions';

const FilterLink = (props) => {
  function handleClick() {
    props.dispatch(setFilter( props.filter ) );
  }
  const isFilterSelected = props.visibilityFilter === props.filter ? 'selected' : '';

  return (
    <a 
      href='#' 
      className={'link visibility-filter__link ' + isFilterSelected}
      onClick={handleClick} >
      {props.text}
    </a>
  )
}

FilterLink.propTypes = {
  text: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    text: ownProps.text,
    filter: ownProps.filter,
    visibilityFilter: state.visibilityFilter
  }
}
export default connect(mapStateToProps)(FilterLink);