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


class TodoList extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Newer'
    }
    this.filterTodos = this.filterTodos.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.setSortByDate = this.setSortByDate.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.todosObjectToArray = this.todosObjectToArray.bind(this);
  }

  filterTodos(todos = {}, filter) {
    let isComplete;
    switch (filter) {
      case SHOW_ACTIVE:
        isComplete = false;
        return this.filterBy(todos, isComplete);
      case SHOW_COMPLETED:
        isComplete = true;
        return this.filterBy(todos, isComplete); 
      case SHOW_ALL:
      default:
        return todos;
    }
  }
  filterBy(todos, isComplete) {
    let filteredTodos = {};
    for (let todoId in todos) {
      if (todos[todoId].isComplete === isComplete)
        filteredTodos[todoId] = todos[todoId];
    }
    return filteredTodos;
  }


  setSortByDate(e) {
    this.setState({ sortBy: e.target.value });
  }
  sortByDate(todos) {
    let todosArr = this.todosObjectToArray(todos);
    let sortedTodos = todosArr.sort((a, b) => { 
      if (this.state.sortBy === 'Newer')
        return b[1].createdOn.seconds - a[1].createdOn.seconds;
      else
        return a[1].createdOn.seconds - b[1].createdOn.seconds;
    });
    return sortedTodos;
  }


  // todosObjectToArray: changes todos data structure from:
  // todos: {
  //   todoId: { isComplete, text, timestamp },
  //   todoId: { ... }  
  // }
  // to:
  // todos: [
  //   [ todoId, { isComplete, text, timestamp } ],
  //   [ todoId, { ... } ]
  // ]
  // to utilize array methods, like sort
  todosObjectToArray(todos, arr = []) {
    for ( let todoId in todos )
      arr.push([todoId , todos[todoId]]);
    return arr;
  }

  render() {
    const filteredTodos = this.filterTodos(this.props.todos, this.props.visibilityFilter);
    const todos = this.sortByDate(filteredTodos) || [];

    return (
      <React.Fragment>

        <VisibilityFilter todos={ this.todosObjectToArray(this.props.todos) } />

        <FormControl className='formControl formControl--sort-by'>
          <InputLabel htmlFor="age-helper">Sort By</InputLabel>
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
            } else 
              return null;
          })
        }
        </ul>

      </React.Fragment>
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
  } else
    todos = {};

  return {
    todos,
    visibilityFilter: state.visibilityFilter,
    auth: state.session.authUser
  }
}

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps),
  firestoreConnect( [{ collection: 'users' }] ) 
)(TodoList);