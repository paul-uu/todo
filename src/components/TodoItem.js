import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../actions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

import Paper from '@material-ui/core/Paper';

const TodoItem = (props) => {
  return (
    <li className='todo-item'>
      <Paper className='Paper'>
        <div
          onClick={ () => props.toggleTodo(props.id) }
          style={{textDecoration: props.todo.isComplete ? 'line-through' : 'none'}}
        >
          { props.todo.text }
        </div>
        <div className='todo-item__secondary-text'>
          { moment(props.todo.createdOn.toDate()).calendar() }
        </div>

        <IconButton 
          className='icon-button todo-item__delete-button'
          color='default'
          tooltip='Delete Todo'
          onClick={ () => props.removeTodo(props.id) } 
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