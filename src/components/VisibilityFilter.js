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
  
    this.state = {
      todosAllCount: 0,
      todosActiveCount : 0,
      todosCompletedCount : 0
    }
  }

  componentDidMount() {
    this.getTodoStatusCount(this.props.todos);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      this.getTodoStatusCount(this.props.todos);
    }
  }

  getTodoStatusCount(todos = []) {
    let count = 0,
        completeTodos = 0,
        activeTodos = 0;

    todos.forEach(todo => {
      count++;
      todo[1].completeTodos
        ? completeTodos++ 
        : activeTodos++;
    });

   this.setState({
    todosAllCount: count,
    todosActiveCount : activeTodos,
    todosCompletedCount : completeTodos
   })

  }

  render() {
    return (
      <div className='visibility-filter'>
        <FilterLink 
          className='visibility-filter__link' 
          text='All' 
          filter={ SHOW_ALL } 
          count={ this.state.todosAllCount } />
        <FilterLink 
          className='visibility-filter__link' 
          text='Active' 
          filter={ SHOW_ACTIVE }
          count={ this.state.todosActiveCount } />
        <FilterLink 
          className='visibility-filter__link' 
          text='Completed' 
          filter={SHOW_COMPLETED} 
          count={ this.state.todosCompletedCount }/>
      </div>
    )
  }
}

export default VisibilityFilter;