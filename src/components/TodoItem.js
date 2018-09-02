import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../actions';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import Paper from 'material-ui/Paper';

const TodoItem = (props) => {
  return (
    <li className='todo-item'
      style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}}
      onClick={() => props.dispatch(toggleTodo(props.todo.id))}>
      
      <Paper className='Paper'>
        <span>{ props.todo.text }</span>
        <IconButton 
          className='icon-button'
          tooltip='Delete Todo'
          tooltipPosition='bottom-center'
          onClick={() => props.dispatch(removeTodo(props.todo.id))} 
        >
          <DeleteIcon />
        </IconButton>
      </Paper>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }) 
}

export default connect()(TodoItem);