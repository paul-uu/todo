import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser, todosQty }) =>
  <div>
  {
    authUser 
      ? <NavigationAuth todosQty={todosQty} />
      : <NavigationNonAuth />
  }
  </div>

const NavigationAuth = props =>
  <ul>
    <ul>
      <li><Link to={routes.MYTODOS}>My Todos ({props.todosQty})</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><SignOutButton /></li>
    </ul>
  </ul>

NavigationAuth.propTypes = {
  todosQty: PropTypes.number
}

const NavigationNonAuth = () => 
  <ul>
    <li><Link to={routes.MYTODOS}>My Todos</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

const mapStateToProps = state => ({
  authUser: state.session.authUser,
  todosQty: state.todos.length
});

export default connect(mapStateToProps)(Navigation);