import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../actions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Paper from '@material-ui/core/Paper';

const TodoItem = (props) => {
  return (
    <li className='todo-item'
      style={{textDecoration: props.todo.complete ? 'line-through' : 'none'}}
      onClick={() => props.dispatch(toggleTodo(props.todo.id))}>
      
      <Paper className='Paper'>
        <span>{ props.todo.text }</span>
        <IconButton 
          className='icon-button delete-button'
          color='default'
          tooltip='Delete Todo'
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