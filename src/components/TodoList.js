import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import VisibilityFilter from './VisibilityFilter';
import { firestoreConnect } from 'react-redux-firebase';
import withAuthorization from './withAuthorization';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants';

const filterTodos = (todos = {}, filter) => {
  let isComplete
  switch (filter) {
    case SHOW_ACTIVE:
      isComplete = false;
      return filterBy(todos, isComplete);
    case SHOW_COMPLETED:
      isComplete = true;
      return filterBy(todos, isComplete); 
    case SHOW_ALL:
    default:
      return todos;
  }
}

const filterBy = (todos, isComplete) => {
  let filteredTodos = {};
  for (let todoId in todos) {
    if (todos[todoId].isComplete === isComplete)
      filteredTodos[todoId] = todos[todoId];
  }
  return filteredTodos;
}



class TodoList extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Newer'
    }
    this.setSortByDate = this.setSortByDate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
  }

  setSortByDate(e) {
    this.setState({ sortBy: e.target.value });
  }
  sortByDate(todos) {
    let todosArr = this.todosObjectToArray(todos);
    let sortedTodos = todosArr.sort((a, b) => { 
      if (this.state.sortBy === 'Newer')
        return b[1].createdOn.seconds - a[1].createdOn.seconds;
      else if (this.state.sortBy === 'Older')
        return a[1].createdOn.seconds - b[1].createdOn.seconds;
    });
    return sortedTodos;
  }

  todosObjectToArray(todos) {
    let arr = [];
    for ( let todoId in todos ) {
      arr.push([todoId , todos[todoId]]);
    }
    return arr;
  }

  render() {
    const todos = this.sortByDate(this.props.todos);
    return (
      <div>

        <VisibilityFilter />

        <FormControl className='formControl'>
          <InputLabel htmlFor="age-helper">Sort By Date</InputLabel>
          <Select
            value={this.state.sortBy}
            onChange={this.setSortByDate}
            input={<Input name="age" id="age-helper" />}
          >
            <MenuItem value={'Newer'}>Newer</MenuItem>
            <MenuItem value={'Older'}>Older</MenuItem>
          </Select>
          <FormHelperText></FormHelperText>
        </FormControl>

        <ul className='todo-list'>
        {
          todos && todos.map(todo => {
            if (todo) {
              return (
                <TodoItem 
                  key={todo[0]}
                  id={todo[0]}
                  todo={todo[1]} />
              )
            }
          })
        }
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  let todos;
  if ( 'users' in state.firestore.data ) {
    const uid = state.firebase.auth.uid;
    todos = uid ? state.firestore.data.users[uid].todos : {};
  } else {
    todos = {};
  }
  return {
    todos: filterTodos(todos, state.visibilityFilter),
    auth: state.session.authUser
  }
}

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps),
  firestoreConnect( [{ collection: 'users' }] ) 
)(TodoList);