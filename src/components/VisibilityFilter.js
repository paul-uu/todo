import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED  
} from '../constants';

const VisibilityFilter = props => {
  return (
    <div>
      <a href='#' 
      style={{textDecoration: props.selectedFilter === SHOW_ALL ? 'underline' : 'none'}} 
      onClick={props.setFilter.bind(null, SHOW_ALL)}>Show All</a>

      <a href='#' 
      style={{textDecoration: props.selectedFilter === SHOW_ACTIVE ? 'underline' : 'none'}} 
      onClick={props.setFilter.bind(null, SHOW_ACTIVE)}>Show Active</a>

      <a href='#' 
      style={{textDecoration: props.selectedFilter === SHOW_COMPLETED ? 'underline' : 'none'}} 
      onClick={props.setFilter.bind(null, SHOW_COMPLETED)}>Show Completed</a>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);