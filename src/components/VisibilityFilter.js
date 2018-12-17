import React, { Component } from 'react';
import FilterLink from './FilterLink';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED  
} from '../constants';

class VisibilityFilter extends Component {
  constructor(props) {
    super(props);
    this.getTodoStatusCount = this.getTodoStatusCount.bind(this);
    this.todosAllCount = 0;
    this.todosActiveCount = 0;
    this.todosCompletedCount = 0;
  }

  componentDidMount() {
    this.getTodoStatusCount(this.props.todos);
  }

  componentDidUpdate() {
    this.getTodoStatusCount(this.props.todos);
  }

  getTodoStatusCount(todos = []) {
    console.log(todos);
    let count = 0,
        isComplete = 0,
        isActive = 0;

    todos.map(todo => {
      count++;
      if (todo[1].isComplete)
        isComplete++;
      else
        isActive++;
    });
    this.todosAllCount = count;
    this.todosActiveCount = isActive;
    this.todosCompletedCount = isComplete;

  }

  render() {
    return (
      <div className='visibility-filter'>
        <FilterLink 
          className='visibility-filter__link' 
          text='All' 
          filter={ SHOW_ALL } 
          count={ this.todosAllCount } />
        <FilterLink 
          className='visibility-filter__link' 
          text='Active' 
          filter={ SHOW_ACTIVE }
          count={ this.todosActiveCount } />
        <FilterLink 
          className='visibility-filter__link' 
          text='Completed' 
          filter={SHOW_COMPLETED} 
          count={ this.todosCompletedCount }/>
      </div>
    )
  }
}

export default VisibilityFilter;