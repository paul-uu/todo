import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo, removeTodo } from '../actions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

import Paper from '@material-ui/core/Paper';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleToggle, false);
    window.removeEventListener('click', this.handleDelete, false);
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }
  handleDelete() {
    this.props.removeTodo(this.props.id)
  }

  render() {
    const completeStatus = this.props.todo.isComplete
      ? <i className="fa fa-check" aria-hidden="true"></i> 
      : null;

    return (
      <li className={`todo-item ${this.props.todo.isComplete ? 'todo-item__complete' : ''}`}>
        <Paper className='Paper'>
          { completeStatus }
          <div className='todo-item__primary-text' onClick={ this.handleToggle }>
            { this.props.todo.text }
          </div>
          <div className='todo-item__secondary-text'>
            { moment(this.props.todo.createdOn.toDate()).calendar() }
          </div>

          <IconButton 
            className='icon-button todo-item__delete-button'
            color='default'
            tooltip='Delete Todo'
            onClick={ this.handleDelete } 
          >
            <DeleteIcon />
          </IconButton>
        </Paper>
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }) 
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem);