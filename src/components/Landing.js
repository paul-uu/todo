import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import withAuthorization from './withAuthorization';
import actionCreators from '../actions';
import { db } from '../firebase';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.authUser !== null) {
      // should migrate this to middleware?
      let userTodos;
      db.getUserTodos(this.props.authUser.uid).then(
        snapshot => {
          userTodos = snapshot.val();
          this.props.setUserTodos(userTodos.todos);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <TodoForm />
        <TodoList />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  authUser: state.session.authUser
});
const mapDispatchToProps = dispatch => ({
  setUserTodos: todos => {
    dispatch(actionCreators.setUserTodos(todos));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);