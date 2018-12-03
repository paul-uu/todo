import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../actions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Paper from '@material-ui/core/Paper';

const TodoItem = (props) => {
  console.log(props);
  return (
    <li className='todo-item' style={{textDecoration: props.todo.isComplete ? 'line-through' : 'none'}}>
      <Paper className='Paper'>
        <span onClick={ () => props.toggleTodo(props.todo.id) }>{ props.todo.text }</span>
        <IconButton 
          className='icon-button delete-button'
          color='default'
          tooltip='Delete Todo'
          onClick={ () => props.removeTodo(props.todo.id) } 
        >
          <DeleteIcon />
        </IconButton>
      </Paper>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    //createdOn: PropTypes.instanceOf(Date)
  }) 
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem);