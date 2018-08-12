import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED  
} from '../constants';

const VisibilityFilter = props => {
  console.log(props.selectedFilter);
  return (
    <div>
      <a href='#' onClick={props.setFilter.bind(null, SHOW_ACTIVE)}>Show Active</a>
      <a href='#' onClick={props.setFilter.bind(null, SHOW_COMPLETED)}>Show Completed</a>
      <a href='#' onClick={props.setFilter.bind(null, SHOW_ALL)}>Show All</a>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedFilter: state.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);